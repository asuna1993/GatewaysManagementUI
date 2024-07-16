import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { GatewayRoutingModule } from './gateway-routing.module';
import { GatewayGetComponent } from './get/gateway-get.component';
import { GatewayListComponent } from './list/gateway-list.component';
import { GatewayCreateComponent } from './create/gateway-create.component';
import { GatewayUpdateComponent } from './update/gateway-update.component';
import { GatewayFormComponent } from './form/gateway-form.component';


@NgModule({
  declarations: [
    GatewayGetComponent,
    GatewayListComponent,
    GatewayCreateComponent,
    GatewayUpdateComponent,
    GatewayFormComponent,
  ],
  imports: [
    CommonModule,
    GatewayRoutingModule, 
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    MaterialModule,
    SharedModule,
  ]
})
export class GatewayModule { }
