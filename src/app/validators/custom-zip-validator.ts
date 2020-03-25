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

// Found it dificult to implement the first one so i made another one, i found this one simpler to implement
export function ZipCodeToCityValidator(zip:any){
    let city = {validZip : false, city:"The city doesn't exist in our database!"};
    City.forEach(zipObj => {
        if(zipObj.zip == zip){
            city = {validZip : true, city:zipObj.city};
        }
    });
    return city;
}