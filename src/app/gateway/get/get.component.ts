import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gateway, GatewayDTO } from '../gateway';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, protected  gatewayService: GatewayService) { }

  gateway: Gateway;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['gatewayId'] !== null && params['gatewayId'] !== undefined){
        let id = params['gatewayId'];
        this.gatewayService.getById(id)
        .subscribe(gateway => {
          this.gateway = gateway;
        },
        (error) => this.router.navigate(['/gateway/']))
      }
      else{
        this.router.navigate(['/gateway/']);
      }
    });
  }

}