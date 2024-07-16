import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, QueryList } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Gateway } from 'src/app/gateway/gateway';
import { GatewayService } from 'src/app/gateway/gateway.service';
import { Pagination } from 'src/app/pagination';
import { ResourceParameters } from 'src/app/resource-parameters';
import { Device } from '../device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})

export class DeviceListComponent implements OnInit {

  devices: Device[] =[];
  displayedColumns: string[] = ['uid', 'vendor', 'createdAt', 'status', 'action'];
  pagination: Pagination = {} as Pagination;
  resource: ResourceParameters = {} as ResourceParameters;
  gatewayId: string;
  gatewaysList: Gateway[];

  constructor(protected deviceService: DeviceService, private activatedRoute: ActivatedRoute, 
    private router: Router, protected gatewayService: GatewayService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      if(params['gatewayId'] !== null && params['gatewayId'] !== undefined){
        this.gatewayId = params['gatewayId'];
      }
      else{
        this.router.navigate(['/gateway']);
      }
    });

    this.loadGatewayList();

    this.loadTable();
  }

  loadTable(){
    this.deviceService.getAll(this.gatewayId, this.resource).subscribe((response: HttpResponse<Device[]>)=>{      
      this.devices = response.body!;
      this.pagination = JSON.parse(response.headers.get("X-Pagination")!);
    }) 
  }

  refreshPagination(data: PageEvent){
    this.resource.pageNumber = data.pageIndex + 1;
    this.resource.pageSize = data.pageSize;
    this.loadTable();
  }

  delete(id: string){
    this.deviceService.delete(id)
    .subscribe(() => {
      this.loadTable();
    }, error => console.error(error));
  }

  loadGatewayList(){
    this.gatewayService.getList().subscribe((data: Gateway[])=>{      
      this.gatewaysList = data;
    }) 
  }

  changeGateway(event: any){
    this.gatewayId = event.value;
    this.loadTable();    
  }
}
