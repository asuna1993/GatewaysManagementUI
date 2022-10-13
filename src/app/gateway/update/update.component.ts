import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parseError } from 'src/app/utils/util';
import { GatewayDTO } from '../gateway';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, protected  gatewayService: GatewayService) { }

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
      (error) => this.errors = parseError(error)
    );    
  }

}
