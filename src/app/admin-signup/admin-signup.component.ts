import { Component } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent {
  constructor(private auth: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (!this.auth.isLoggedIn || !this.auth.isAdmin) {
      this.router.navigate(['/authentication'], {relativeTo: this.route, skipLocationChange: true})
    }
  }
}
