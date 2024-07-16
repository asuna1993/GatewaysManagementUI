import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewayListComponent } from './gateway/list/gateway-list.component';
import { GatewayCreateComponent } from './gateway/create/gateway-create.component';
import { GatewayUpdateComponent } from './gateway/update/gateway-update.component';
import { GatewayGetComponent } from './gateway/get/gateway-get.component';


const routes: Routes = [
  { path: '', redirectTo: 'gateway/list', pathMatch: 'full'},
  { path: 'gateway', redirectTo: 'gateway/list', pathMatch: 'full'},
  { path: 'gateway/list', component: GatewayListComponent },
  { path: 'gateway/create', component: GatewayCreateComponent },
  { path: 'gateway/update/:gatewayId', component: GatewayUpdateComponent },
  { path: 'gateway/:gatewayId', component: GatewayGetComponent },
  
  { path: 'device', loadChildren: () => import('./device/device.module').then(m => m.DeviceModule) }
  /*{ path: 'device/list/:gatewayId', loadComponent: () => import('./device/list/device-list.component').then(m => m.DeviceListComponent) },
  { path: 'device/create/:gatewayId', loadComponent: () => import('./device/create/device-create.component').then(m => m.DeviceCreateComponent) },
  { path: 'device/update/:gatewayId/:deviceId', loadComponent: () => import('./device/update/device-update.component').then(m => m.DeviceUpdateComponent) },
  { path: 'device/:deviceId', loadComponent: () => import('./device/get/device-get.component').then(m => m.DeviceGetComponent) },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
