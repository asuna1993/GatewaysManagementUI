import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parseError } from 'src/app/utils/util';
import { DeviceDTO } from '../device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  errors: string[] = [];
  gatewayId: string;

  constructor(private router: Router, protected  deviceService: DeviceService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {    
    this.activatedRoute.params.subscribe(params => {
      if(params['gatewayId'] !== null && params['gatewayId'] !== undefined){
        this.gatewayId = params['gatewayId'];
      }
      else{
        this.router.navigate(['/gateway/']);
      }
    });
  }

  createDevice(device: DeviceDTO){
    this.deviceService.create(this.gatewayId, device).subscribe(
      () => {
        this.router.navigate(['/device/list/'+this.gatewayId]);
      },
      (error) => this.errors = parseError(error)
    );    
  }

}
