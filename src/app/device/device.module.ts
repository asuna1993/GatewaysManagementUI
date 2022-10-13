import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { GetComponent } from './get/get.component';
import { FormComponent } from './form/form.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    ListComponent,
    GetComponent,
    FormComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class DeviceModule { }
