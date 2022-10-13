import {AbstractControl, ValidatorFn} from '@angular/forms';
import { isIPAddress, isIPV6Address, isIPV4Address, ipVersion } from "ip-address-validator";

export function ipAdress(): ValidatorFn {  
    return (control: AbstractControl): { [key: string]: any } | null =>  
    isIPV4Address(control.value)
            ? null : {invalidIP: control.value};
}