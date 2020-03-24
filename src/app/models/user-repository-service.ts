import { Injectable } from '@angular/core';
import {User} from './User'

@Injectable({
  providedIn: 'root',
})

export class UserService {
    public users = [
        {
          id: 1, 
          firstName: "Jovan",
          lastName : "Nakov",
          zipCode : 2300,
          movies : []
        },
        { 
          id: 2,
          firstName: "Vesna",
          lastName : "Angelova",
          zipCode : 1000,
          movies : []
        },
        { 
          id: 3,
          firstName: "Angela",
          lastName : "Angelova",
          zipCode : 1200,
          movies : []
        },
        { 
          id: 4,
          firstName: "Petre",
          lastName : "Petrov",
          zipCode : 2300,
          movies : []
        }
      ]

      addUser(user:User){
            this.users.push(user);
      }

      getUsers(){
          return this.users;
      }

      getUser(id:number){
          return this.users.filter((user) => {
                if(user.id == id) return user;
          });
      }

      editUser(newUser:User){
          this.users = this.users.filter((user) => {
                if(user.id == newUser.id) return newUser;
                return user;
          });
      }

      removeUser(id:number){
        this.users = this.users.filter((user) => {
              if(user.id != id) return user;
          });
      }
}