import { AbstractControl } from '@angular/forms';
import {City} from '../models/zipcode-data'
import { zip } from 'rxjs';

export function ValidateZipCode(control: AbstractControl) {
    City.forEach(zipObj => {
        if(zipObj.zip == control.value){
            return {validZip : true, city:zipObj.city};
        }
    });
    return {validZip:false,city:null};
}