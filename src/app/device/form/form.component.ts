import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeviceDTO } from '../device';

@Component({
  selector: 'app-device-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  form: FormGroup;
  gatewayId: string;
  
  @Input()
  errors: string[] = [];

  @Input()
  model: DeviceDTO;

  @Output()
  onSubmit: EventEmitter<DeviceDTO> = new EventEmitter<DeviceDTO>();

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
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
  
  submitForm(){
       this.onSubmit.emit(this.form.value);
  }

  GetFieldError(fieldName: string){
    var field = this.form.get(fieldName);
    if(field?.hasError('required')){
      return 'The field is required';
    }
    return '';
  }

}
