import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { GatewayModule } from './gateway/gateway.module';
import { DeviceModule } from './device/device.module';

import { SharedModule } from './shared/shared.module';
import { HighlightDirective } from './directives/app-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective
  ],
  imports: [    
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    SharedModule,
    GatewayModule,
    DeviceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
