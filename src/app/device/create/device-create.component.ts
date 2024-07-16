import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceDTO } from '../device';
import { DeviceService } from '../device.service';
import { ValidatorService } from '../../shared/validator.service';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {
  errors: string[] = [];
  gatewayId: string;

  constructor(private router: Router, protected  deviceService: DeviceService, 
    private activatedRoute: ActivatedRoute, private validatorService: ValidatorService) { }

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
      (error) => this.errors = this.validatorService.parseError(error)
    );    
  }

}
