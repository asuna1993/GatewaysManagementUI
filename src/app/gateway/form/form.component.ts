import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ipAdress } from 'src/app/utils/validators/IPAdressValidator';
import { GatewayDTO } from '../gateway';

@Component({
  selector: 'app-gateway-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  errors: string[] = [];
  
  @Input()
  model: GatewayDTO;

  @Output()
  onSubmit: EventEmitter<GatewayDTO> = new EventEmitter<GatewayDTO>();


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      serialNumber: ['', {
        validators: [Validators.required]
      }],
      name: ['', {
        validators: [Validators.required]
      }],
      ipAdress: ['', {
        validators: [Validators.required, Validators.minLength(7), Validators.maxLength(15), ipAdress()]
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
    if(field?.hasError('minLength')){
      return 'The field minimum length is 7 characters';
    }
    if(field?.hasError('maxLength')){
      return 'The field maximum length is 15 characters';
    }
    if(field?.hasError('invalidIP')){
      return 'The IP Adress is invalid';
    }
    return '';
  }


}
