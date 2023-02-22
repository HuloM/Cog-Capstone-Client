import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  user = {
    username: 'matt'
  }

  login = () => {
    this.isLoggedIn = true;
  }

  signout = () => {
    this.isLoggedIn = false;
  }
}
