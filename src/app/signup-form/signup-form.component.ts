import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {passwordsMatchValidator} from './passwords-match.directive'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {

  constructor(private auth: AuthenticationService) {
  }
  signupForm !: FormGroup
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('test', [
        Validators.required,
        Validators.minLength(2)
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        passwordsMatchValidator('password')
      ])
    })
  }


  signup = (e: Event) => {
    e.preventDefault();
    if(this.auth.isAdmin) {
      this.auth.signupAdmin({
        name: this.signupForm.value.name,
        username: this.signupForm.value.username,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        confirmPassword: this.signupForm.value.confirmPassword
      })
    } else {
      this.auth.signup({
        name: this.signupForm.value.name,
        username: this.signupForm.value.username,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        confirmPassword: this.signupForm.value.confirmPassword
      })
    }
  }
}
