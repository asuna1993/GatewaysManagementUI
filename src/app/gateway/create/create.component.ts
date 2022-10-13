import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { parseError } from 'src/app/utils/util';
import { GatewayDTO } from '../gateway';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  errors: string[] = [];

  constructor(private router: Router, protected  gatewayService: GatewayService) { }

  createGateway(gateway: GatewayDTO){
    this.gatewayService.create(gateway).subscribe(
      () => {
        this.router.navigate(['/gateway']);
      },
      (error) => this.errors = parseError(error)
    );    
  }
}
