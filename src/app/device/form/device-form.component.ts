import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeviceDTO } from '../device';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute) { }

  form: FormGroup;
  gatewayId: string;
  
  @Input()
  errors: string[] = [];

  @Input()
  model: DeviceDTO;

  @Output()
  onSubmit: EventEmitter<DeviceDTO> = new EventEmitter<DeviceDTO>();

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.gatewayId = params['gatewayId'];
    });

    this.form = this.formBuilder.group({
      uid: ['', {
        validators: [Validators.required]
      }],
      vendor: ['', {
        validators: [Validators.required]
      }],
      statusId: ['', {
        validators: [Validators.required]
      }]
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
  
  submitForm(){
    if (this.form.valid) {
       this.onSubmit.emit(this.form.value);
    }
  }

  GetFieldError(fieldName: string): string{
    const field = this.form.get(fieldName);
    if(field?.hasError('required')){
      return 'The field is required';
    }
    return '';
  }

}
