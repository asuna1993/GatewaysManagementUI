import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewayListComponent } from './list/gateway-list.component';
import { GatewayCreateComponent } from './create/gateway-create.component';
import { GatewayUpdateComponent } from './update/gateway-update.component';
import { GatewayGetComponent } from './get/gateway-get.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewayRoutingModule { }
