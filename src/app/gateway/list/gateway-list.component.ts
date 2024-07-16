import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pagination } from 'src/app/pagination';
import { ResourceParameters } from 'src/app/resource-parameters';
import { Gateway } from '../gateway';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-gateway-list',
  templateUrl: './gateway-list.component.html',
  styleUrls: ['./gateway-list.component.css'],
})
export class GatewayListComponent implements OnInit {
  gateways: Gateway[] = [];
  displayedColumns: string[] = ['serialNumber', 'name', 'ipAdress', 'action'];
  pagination: Pagination = {} as Pagination;
  resource: ResourceParameters = {} as ResourceParameters;

  constructor(protected gatewayService: GatewayService) {}

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable(): void {
    this.gatewayService.getAll(this.resource).subscribe({
      next: (response: HttpResponse<Gateway[]>) => {
        this.gateways = response.body!;
        this.pagination = JSON.parse(response.headers.get('X-Pagination')!);
      },
      error: (error: any) => {
        console.error('Error fetching table data:', error);
        // Handle the error (e.g., show a user-friendly message)
      },
      complete: () => {
        // Optional: Perform any cleanup or additional logic after data is loaded
      },
    });
  }

  refreshPagination(data: PageEvent) {
    this.resource.pageNumber = data.pageIndex + 1;
    this.resource.pageSize = data.pageSize;
    this.loadTable();
  }

  delete(id: string) {
    this.gatewayService.delete(id).subscribe(
      () => {
        this.loadTable();
      },
      (error) => console.error(error)
    );
  }
}
