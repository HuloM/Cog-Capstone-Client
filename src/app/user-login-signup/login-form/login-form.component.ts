import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {AuthenticationService} from '../../services/authentication.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(private auth: AuthenticationService) {
  }
  loginForm !: FormGroup
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      rememberMe: new FormControl(false)
    })
  }
  login = (e: Event) => {
    this.auth.login({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }, this.loginForm.value.rememberMe)
  }
}
