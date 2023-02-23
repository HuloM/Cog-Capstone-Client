import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = "";
  password: string = "";
  rememberMe: boolean = false;
  login = () => {
    console.log("username: " + this.username)
    console.log("password: " + this.password)
    console.log("rememberMe: " + this.rememberMe)

  }
}
