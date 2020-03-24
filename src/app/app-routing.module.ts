import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import {FormStep1Component} from './form-step1/form-step1.component';
import { FormStep2Component } from './form-step2/form-step2.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"home", component: ListUserComponent},
  {path:"step1",component: FormStep1Component},
  {path:"step2",component: FormStep2Component},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routeComponents = [ListUserComponent, FormStep1Component, FormStep2Component,NotFoundComponent]
