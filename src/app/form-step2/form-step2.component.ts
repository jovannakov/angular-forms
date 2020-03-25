import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import {Movie} from '../models/Movie'
import { Transfer } from '../models/transfer-user';
import {FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-form-step2',
  templateUrl: './form-step2.component.html',
  styleUrls: ['./form-step2.component.css']
})
export class FormStep2Component implements OnInit {

  user:User;

  form:FormGroup;
  moviesForm:FormGroup;

  constructor(private transfer:Transfer, private formBuilder:FormBuilder, private router:Router) {
    this.user = transfer.getUser();
   }

  ngOnInit(): void {
    this.moviesForm = this.formBuilder.group({
      'movies':this.formBuilder.group({})
    });
    this.moviesForm.setControl('movies', this.setMovies(this.user.movies));
  }

  get movies(){
    return this.moviesForm.get('movies') as FormArray;
  }

  setMovies(movies){
    const array = new FormArray([]);
    movies.forEach(element => {
        array.push(this.formBuilder.group({
            Name:[element.Name, Validators.required],
            Image:[element.Image]
        }));
    });
    return array;
  }


  addMovieFiled(){
    this.movies.push(this.formBuilder.group({
        Name: ['', Validators.required],
        Image: ['']
    }));
  }

  removeMovie(index){
    debugger;
    this.movies.removeAt(index);
  }


  goBackToStep1(){
    if(this.saveData()){
      this.router.navigateByUrl("/step1");
    }
  }

  completeForm(){
    if(this.saveData()){
      this.router.navigateByUrl("/home");
    }
  }

  saveData(){
    // returns true if all the required fields are entered
    // and false if one or more required fields are missing
    let iterativeMovies = this.moviesForm.getRawValue().movies;
    let isFormValid = true;
    iterativeMovies.forEach(movie => {
      if(movie.Name === "") isFormValid = false;
    });
    this.transfer.setMovies(iterativeMovies);
    return isFormValid;
  }

}
