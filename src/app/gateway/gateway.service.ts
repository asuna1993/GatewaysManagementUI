import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Gateway, GatewayDTO } from './gateway';
import { ResourceParameters } from '../resource-parameters';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  private apiServer = environment.apiURL + "gateway/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' 
    })
  }

  constructor(private httpClient: HttpClient) { }

  create(gateway: GatewayDTO){
    return this.httpClient.post(this.apiServer, JSON.stringify(gateway), this.httpOptions);
  }  
  
  getById(id: string): Observable<Gateway> {
    return this.httpClient.get<Gateway>(this.apiServer + id);
  }

  getAll(resource: ResourceParameters): Observable<any> {
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
    
    return this.httpClient.get<Gateway[]>(this.apiServer, {observe: 'response', params});
  }

  getList(): Observable<Gateway[]> {       
    return this.httpClient.get<Gateway[]>(this.apiServer);
  }

  update(id: string, gateway: GatewayDTO) {
    return this.httpClient.put(this.apiServer + id, JSON.stringify(gateway), this.httpOptions);
  }

  delete(id: string){
    return this.httpClient.delete(this.apiServer + id, this.httpOptions);
  }
}
