import { Component } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public authenticationService: AuthenticationService) {
    console.log(this.authenticationService.user)
  }

  signout = () => {
    this.authenticationService.logout()
  }
}
