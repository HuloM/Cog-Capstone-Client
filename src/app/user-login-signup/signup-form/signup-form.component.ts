import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  name: string = "";
  username: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  signup = () => {
    console.log("name: " + this.name)
    console.log("username: " + this.username)
    console.log("email: " + this.email)
    console.log("password: " + this.password)
    console.log("confirmPassword: " + this.confirmPassword)
  }
}
