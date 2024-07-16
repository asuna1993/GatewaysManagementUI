import { Injectable } from '@angular/core';
import {AbstractControl, ValidatorFn} from '@angular/forms';
import { isIPV4Address } from "ip-address-validator";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  ipAdress(): ValidatorFn {  
    return (control: AbstractControl): { [key: string]: any } | null =>  
    isIPV4Address(control.value)
            ? null : {invalidIP: control.value};
  }

  parseError(response: any): string[]{
    const result: string[] = [];

    if(response.error){
        if(typeof response.error === 'string'){
            result.push(response.error);
        }
        else{
            const mapErrors = response.error.errors;
            const entry = Object.entries(mapErrors);
            entry.forEach((array: any[]) => {
                const field =array[0];
                array[1].forEach(errorMessage =>{
                    result.push(`${field}: ${errorMessage}`);
                }); 
            })
            
        }
    }

    return result;
}

}
