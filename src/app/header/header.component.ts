import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  user = {
    username: 'matt',
    roleType: 'admin'
  }
  isAdmin: boolean = this.user.roleType === 'admin';

  login = () => {
    this.isLoggedIn = true;
  }

  signout = () => {
    this.isLoggedIn = false;
  }
}
