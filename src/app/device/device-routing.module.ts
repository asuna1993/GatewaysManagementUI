import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './list/device-list.component';
import { DeviceGetComponent } from './get/device-get.component';
import { DeviceCreateComponent } from './create/device-create.component';
import { DeviceUpdateComponent } from './update/device-update.component';
const routes: Routes = [
  { path: 'device/list/:gatewayId', component: DeviceListComponent },
  { path: 'device/create/:gatewayId', component: DeviceCreateComponent },
  { path: 'device/update/:gatewayId/:deviceId', component: DeviceUpdateComponent },
  { path: 'device/:deviceId', component: DeviceGetComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
