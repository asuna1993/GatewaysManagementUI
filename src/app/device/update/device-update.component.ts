import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceDTO } from '../device';
import { DeviceService } from '../device.service';
import { ValidatorService } from '../../shared/validator.service';

@Component({
  selector: 'app-device-update',
  templateUrl: './device-update.component.html',
  styleUrls: ['./device-update.component.css']
})
export class DeviceUpdateComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    protected  deviceService: DeviceService, private validatorService: ValidatorService) { }

  model: DeviceDTO;
  id: string;
  gatewayId: string;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['gatewayId'] !== null && params['gatewayId'] !== undefined){
        this.gatewayId = params['gatewayId'];
      }
      else{
        this.router.navigate(['/gateway/']);
      }

      if(params['deviceId'] !== null && params['deviceId'] !== undefined){
        this.id = params['deviceId'];
        this.deviceService.getById(this.id)
        .subscribe(device => {
          this.model = device;
        },
        (error) => this.router.navigate(['/device/list/'+this.gatewayId]))
      }
      else{
        this.router.navigate(['/gateway/']);
      }
    });

  }
  
  updateDevice(device: DeviceDTO){
    this.deviceService.update(this.gatewayId,this.id, device).subscribe(
      () => {
        this.router.navigate(['/device/list/'+this.gatewayId]);
      },
      (error) => this.errors = this.validatorService.parseError(error)
    );    
  }

}
