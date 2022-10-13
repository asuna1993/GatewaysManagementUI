import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Device, DeviceDTO } from './device';
import { ResourceParameters } from '../resource-parameters';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private apiServer = environment.apiURL;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  create(gatewayId: string, device: DeviceDTO){
    return this.httpClient.post(`${this.apiServer}gateway/${gatewayId}/device`, JSON.stringify(device), this.httpOptions);
  }

  getById(id: string): Observable<Device> {
    return this.httpClient.get<Device>(`${this.apiServer}device/${id}`);
  }  
  
  getAll(gatewayId: string, resource: ResourceParameters): Observable<any> {
    let params = new HttpParams();
    if(resource !== null && resource !== undefined){
      if(resource.searchQuery !== null && resource.searchQuery !== undefined){
        params = params.append('searchQuery', resource.searchQuery);
      }
      if(resource.searchQuery !== null && resource.searchQuery !== undefined){
        params = params.append('searchQuery', resource.searchQuery);
      }

      if(resource.pageNumber !== null && resource.pageNumber !== undefined){
        params = params.append('pageNumber', resource.pageNumber??"");
      }      

      if(resource.pageSize !== null && resource.pageSize !== undefined){
        params = params.append('pageSize', resource.pageSize??"");
      }      

      if(resource.orderDirection !== null && resource.orderDirection !== undefined){
        params = params.append('orderDirection', resource.orderDirection??"");
      }      

      if(resource.orderBy !== null && resource.orderBy !== undefined){
        params = params.append('orderBy', resource.orderBy??"");
      }
      
    }
    
    return this.httpClient.get<Device[]>(`${this.apiServer}gateway/${gatewayId}/device`, {observe: 'response', params});
  }

  update(gatewayId: string, id: string, device: DeviceDTO) {
    return this.httpClient.put(`${this.apiServer}gateway/${gatewayId}/device/${id}`, JSON.stringify(device), this.httpOptions);
  }

  delete(id: string){
    return this.httpClient.delete(`${this.apiServer}device/${id}`, this.httpOptions);
  }
}
