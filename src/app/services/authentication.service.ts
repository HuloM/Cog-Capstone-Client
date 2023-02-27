import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {CookieService} from 'ngx-cookie-service'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private cookieService: CookieService,
  private router: Router) {
    if(localStorage.getItem('username') && localStorage.getItem('roleType')) {
      this.user.username = localStorage.getItem('username') as string
      this.user.roleType = localStorage.getItem('roleType') as string
      this.isLoggedIn = true;
      this.isAdmin = this.user.roleType === 'admin';
    }
  }

  jsonWebToken !: string

  user: {username: string, roleType: string} = {
    username: '',
    roleType: ''
  }
  isLoggedIn: boolean = false;

  isAdmin: boolean = false;

  signup = (user: {name: string, username: string, email: string,
    password: string, confirmPassword: string}) => {
    this.http.post('http://localhost:8080/api/v1/user/register', user).subscribe((response: any) => {
      if (response.status === 200) {
        window.location.reload()
      } else {
        alert(response.message)
      }
    })
  }
  signupAdmin = (admin: {name: string, username: string, email: string,
    password: string, confirmPassword: string}) => {
    this.http.post('http://localhost:8080/api/v1/user/registerAdmin', admin, {
      headers: {
        'Authorization': '' + this.cookieService.get('token')
      }
    }).subscribe((response: any) => {

      if (response.status === 200) {
        this.router.navigate(['/'])
      } else {
        alert(response.message)
      }
    })
  }

  login = (user: {username: string, password: string}, rememberMe: boolean) => {
    this.http.post('http://localhost:8080/api/v1/user/authenticate', user).subscribe((response: any) => {
      console.log(response)
      if (response.data.username) {
        this.user.username = response.data.username
        this.user.roleType = response.data.role
        this.jsonWebToken = 'Bearer ' + response.data.token
        if(rememberMe) {
          this.cookieService.set('token', 'Bearer ' + response.data.token)
        }
        this.isLoggedIn = true;
        this.isAdmin = this.user.roleType === 'admin';
        localStorage.setItem('username', this.user.username)
        localStorage.setItem('roleType', this.user.roleType)
        this.router.navigate(['/'])
      } else {
        alert('Invalid credentials')
      }
    })
  }

  logout = () => {
    this.cookieService.delete('token')
    localStorage.removeItem('username')
    localStorage.removeItem('roleType')
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.user = {
      username: '',
      roleType: ''
    }
    this.router.navigate(['/authentication'])
  }
}
