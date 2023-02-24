import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {CookieService} from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private cookieService: CookieService) {
  }
  user: {username: string, roleType: string} = {
    username: '',
    roleType: ''
  }
  isLoggedIn: boolean = false;

  isAdmin: boolean = false;

  signup = (user: {name: string, username: string, email: string,
    password: string, confirmPassword: string}) => {
    this.http.post('http://localhost:8080/api/v1/user/register', user).subscribe((response: any) => {
      console.log(response)
    })
  }

  login = (user: {username: string, password: string}) => {
    this.http.post('http://localhost:8080/api/v1/user/authenticate', user).subscribe((response: any) => {
      console.log(response)
      if (response.data.username) {
        this.user.username = response.data.userName
        this.user.roleType = response.data.role
        this.cookieService.set('token', 'Bearer ' + response.data.token)
        console.log(this.isLoggedIn)
        console.log(this.isAdmin)
        this.isLoggedIn = true;
        this.isAdmin = this.user.roleType === 'admin';
      }
    })
  }

  logout = () => {
    this.cookieService.delete('token')
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.user = {
      username: '',
      roleType: ''
    }
  }
}
