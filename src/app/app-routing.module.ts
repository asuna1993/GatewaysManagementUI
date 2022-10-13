import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent as GatewayCreateComponent } from './gateway/create/create.component';
import { ListComponent as GatewayListComponent } from './gateway/list/list.component';
import { UpdateComponent as GatewayUpdateComponent } from './gateway/update/update.component';
import { GetComponent as GatewayGetComponent } from './gateway/get/get.component';

import { ListComponent as DeviceListComponent } from './device/list/list.component';
import { CreateComponent as DeviceCreateComponent } from './device/create/create.component';
import { UpdateComponent as DeviceUpdateComponent } from './device/update/update.component';
import { GetComponent as DeviceGetComponent } from './device/get/get.component';

const routes: Routes = [
  { path: '', redirectTo: 'gateway/list', pathMatch: 'full'},
  { path: 'gateway', redirectTo: 'gateway/list', pathMatch: 'full'},
  { path: 'gateway/list', component: GatewayListComponent },
  { path: 'gateway/create', component: GatewayCreateComponent },
  { path: 'gateway/update/:gatewayId', component: GatewayUpdateComponent },
  { path: 'gateway/:gatewayId', component: GatewayGetComponent },
  
  { path: 'device/list/:gatewayId', component: DeviceListComponent },
  { path: 'device/create/:gatewayId', component: DeviceCreateComponent },
  { path: 'device/update/:gatewayId/:deviceId', component: DeviceUpdateComponent },
  { path: 'device/:deviceId', component: DeviceGetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
