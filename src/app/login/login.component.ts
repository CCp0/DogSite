import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.model';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private logins: User[];
  constructor(private loginService: LoginServiceService, private route:Router) { 
    this.logins = [
      new User(1, "Login1", "Password1"),
      new User(2, "Login2", "Password2")
    ]
  }

  ngOnInit(): void {
  }
  validLogin(username: any, password: any) : void
  {
    let valid = false;
    let userID!:number;
    for(let i = 0; i < this.logins.length; i++)
    {
      if(username.value == this.logins[i].username && password.value == this.logins[i].password)
      {
        valid = true;
        userID = this.logins[i].userID;
      }
    }
    if(valid == true)
    {
    this.loginService.setID(userID);
    this.route.navigate(['/dogs']); // navigate to other page
    }
    else{
      alert("Invalid Credentials");
    }
  }
}