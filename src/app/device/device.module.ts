import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DeviceListComponent } from './list/device-list.component';
import { DeviceGetComponent } from './get/device-get.component';
import { DeviceFormComponent } from './form/device-form.component';
import { DeviceCreateComponent } from './create/device-create.component';
import { DeviceUpdateComponent } from './update/device-update.component';
import { DeviceRoutingModule } from './device-routing.module';



@NgModule({
  declarations: [
    DeviceListComponent,
    DeviceGetComponent,
    DeviceFormComponent,
    DeviceCreateComponent,
    DeviceUpdateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DeviceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    MaterialModule,
    SharedModule,
  ]
})
export class DeviceModule { }
