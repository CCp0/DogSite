import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  loginID!: number;
  constructor() { }
  setID(id: number)
  {
    this.loginID = id;
  }
  getID()
  {
    console.log("Test ID: " + this.loginID);
    return this.loginID;
  }
}
