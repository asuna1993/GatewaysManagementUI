import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pagination } from 'src/app/pagination';
import { ResourceParameters } from 'src/app/resource-parameters';
import { Gateway } from '../gateway';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  gateways: Gateway[] =[];
  displayedColumns: string[] = ['serialNumber', 'name', 'ipAdress', 'action'];
  pagination: Pagination = {} as Pagination;
  resource: ResourceParameters = {} as ResourceParameters;

  constructor(protected gatewayService: GatewayService) { }

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable(){
    this.gatewayService.getAll(this.resource).subscribe((response: HttpResponse<Gateway[]>)=>{      
      this.gateways = response.body!;
      this.pagination = JSON.parse(response.headers.get("X-Pagination")!);
    }) 
  }

  refreshPagination(data: PageEvent){
    this.resource.pageNumber = data.pageIndex + 1;
    this.resource.pageSize = data.pageSize;
    this.loadTable();
  }

  delete(id: string){
    this.gatewayService.delete(id)
    .subscribe(() => {
      this.loadTable();
    }, error => console.error(error));
  }
}
