import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GatewayDTO } from '../gateway';
import { GatewayService } from '../gateway.service';
import { ValidatorService } from '../../shared/validator.service';

@Component({
  selector: 'app-gateway-update',
  templateUrl: './gateway-update.component.html',
  styleUrls: ['./gateway-update.component.css']
})
export class GatewayUpdateComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    protected  gatewayService: GatewayService, private validatorService: ValidatorService) { }

  model: GatewayDTO;
  id: string;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.gatewayService.getById(params['gatewayId'])
      .subscribe(gateway => {
        this.model = gateway;
        this.id = gateway.id;
      },
      (error) => this.router.navigate(['/gateway']))
    });

  }
  
  updateGateway(gateway: GatewayDTO){
    this.gatewayService.update(this.id, gateway).subscribe(
      () => {
        this.router.navigate(['/gateway']);
      },
      (error) => this.errors = this.validatorService.parseError(error)
    );    
  }

}
