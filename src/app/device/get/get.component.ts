import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '../device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, protected  deviceService: DeviceService) { }

  device: Device;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['deviceId'] !== null && params['deviceId'] !== undefined){
        let id = params['deviceId'];
        this.deviceService.getById(id)
        .subscribe(device => {
          this.device = device;
        },
        (error) => this.router.navigate(['/gateway/']))
      }
      else{
        this.router.navigate(['/gateway/']);
      }
    });
  }

}
