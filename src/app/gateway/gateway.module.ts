import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { GatewayRoutingModule } from './gateway-routing.module';
import { GetComponent } from './get/get.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    GetComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    GatewayRoutingModule, 
    HttpClientModule,
    FormsModule
  ]
})
export class GatewayModule { }
