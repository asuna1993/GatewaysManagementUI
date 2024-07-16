import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GatewayDTO } from '../gateway';
import { GatewayService } from '../gateway.service';
import { ValidatorService } from '../../shared/validator.service';

@Component({
  selector: 'app-gateway-create',
  templateUrl: './gateway-create.component.html',
  styleUrls: ['./gateway-create.component.css']
})
export class GatewayCreateComponent {
  errors: string[] = [];

  constructor(private router: Router, protected  gatewayService: GatewayService, private validatorService: ValidatorService) { }

  createGateway(gateway: GatewayDTO){
    this.gatewayService.create(gateway).subscribe(
      () => {
        this.router.navigate(['/gateway']);
      },
      (error) => this.errors = this.validatorService.parseError(error)
    );    
  }
}
