import { Component, OnInit } from '@angular/core';
import { Transfer } from '../models/transfer-user';
import { User } from '../models/User';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import {Router} from '@angular/router'
import { ValidateZipCode } from '../validators/custom-zip-validator';
import { City } from '../models/zipcode-data';

@Component({
  selector: 'app-form-step1',
  templateUrl: './form-step1.component.html',
  styleUrls: ['./form-step1.component.css']
})
export class FormStep1Component implements OnInit {

  public user:User;
  editForm : FormGroup;
  public userCity:string;

  constructor(private transfer:Transfer, private formBuilder:FormBuilder, private router:Router) {
    this.user = this.transfer.getUser();
   }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, [Validators.required]),
      lastName: new FormControl(this.user.lastName, [Validators.required]),
      zip: new FormControl(this.user.zipCode, [Validators.required])
    });
  }

  submitClick(){
    this.user.firstName = this.editForm.controls.firstName.value;
    this.user.lastName = this.editForm.controls.lastName.value;
    this.user.zipCode = this.editForm.controls.zip.value;
    this.transfer.setUser(this.user);
    this.router.navigateByUrl("/step2");
  }
}
