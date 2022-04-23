import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from '../interfaces/user.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private logins: User[];
  constructor() { 
    this.logins = [
      new User(1, "Login1", "Password1"),
      new User(1, "Login2", "Password2")
    ]
  }
  ngOnInit(): void {
  }
  validLogin(username: any, password: any) : number
  {
    let valid = false;
    let userID!:number;
    for(let i = 0; i < this.logins.length; i++)
    {
      if(username == this.logins[i].username && password == this.logins[i].password)
      {
        valid = true;
        userID = this.logins[i].userID;
      }
    }
    return userID;
  }
}