import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { CreateComponent as GatewayCreateComponent } from './gateway/create/create.component';
import { ListComponent as GatewayListComponent } from './gateway/list/list.component';
import { UpdateComponent as GatewayUpdateComponent } from './gateway/update/update.component';
import { FormComponent as GatewayFormComponent } from './gateway/form/form.component';
import { GetComponent as GatewayGetComponent } from './gateway/get/get.component';

import { ListComponent as DeviceListComponent } from './device/list/list.component';
import { CreateComponent as DeviceCreateComponent } from './device/create/create.component';
import { UpdateComponent as DeviceUpdateComponent } from './device/update/update.component';
import { FormComponent as DeviceFormComponent } from './device/form/form.component';
import { GetComponent as DeviceGetComponent } from './device/get/get.component';
import { ShowErrorsComponent } from './utils/show-errors/show-errors.component';


@NgModule({
  declarations: [
    AppComponent,
    GatewayListComponent,
    GatewayCreateComponent,
    GatewayUpdateComponent,
    GatewayFormComponent,
    GatewayGetComponent,

    DeviceListComponent,
    DeviceCreateComponent,
    DeviceUpdateComponent,
    DeviceFormComponent,
    DeviceGetComponent,
    ShowErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
