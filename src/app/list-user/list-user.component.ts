import { Component, OnInit } from '@angular/core';
import {User} from '../models/User'
import {UserService} from '../models/user-repository-service';
import {Router} from '@angular/router'
import { Transfer } from '../models/transfer-user';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass']
})
export class ListUserComponent implements OnInit {

  users:User[];

  router:Router;
  constructor(private userService:UserService, private transfer:Transfer) {
    this.users = userService.getUsers() as User[];
   }

  ngOnInit(): void {
    this.users = this.userService.getUsers() as User[];
  }
 
  remove(id:number){
    this.userService.removeUser(id);
    this.ngOnInit();
  }
  editUser(id:number){
    let user = this.userService.getUser(id);
    this.transfer.setUser(user[0] as User);
  }
}
