import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {CookieService} from 'ngx-cookie-service'
import {ActivatedRoute, Router} from '@angular/router'
import {AuthenticationService} from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router, private auth: AuthenticationService, private route: ActivatedRoute) {
  }

  answers !: any[]

  createAnswer(param: {
    file: File, description_answer: string, create_by: string, question_id: number, datetime: Date
  }) {
    const form = new FormData()
    form.append('file', param.file)
    form.append('description_answer', param.description_answer)
    form.append('create_by', param.create_by)
    form.append('question_id', param.question_id.toString())
    form.append('datetime', param.datetime.toString())

    if (this.cookieService.get('token')) {
      this.http.post('http://localhost:8080/api/v1/answer/add', form, {
        headers: {
          'Authorization': this.auth.jsonWebToken
        }
      }).subscribe((response: any) => {
        console.log(response)
      })
    this.router.navigate(['/search'], {
      relativeTo: this.route,
      skipLocationChange: true
    })
    }
  }

  getAnswersByQuestionId = (id: number) => {
    if (this.cookieService.get('token')) {
      this.http.get(`http://localhost:8080/api/v1/answer/getByQuestionId/${id}`, {
        headers: {
          'Authorization': this.auth.jsonWebToken
        }
      }).subscribe((response: any) => {
        console.log(response)
        this.answers = response.data
      })
    }
  }

  getAnswersNotApproved() {
    if (this.cookieService.get('token') && localStorage.getItem('roleType') === 'admin') {
      this.http.get(`http://localhost:8080/api/v1/answer/getAllNotApproved`, {
        headers: {
          'Authorization': this.auth.jsonWebToken
        }
      }).subscribe((response: any) => {
        console.log(response)
        this.answers = response.data
      })
    }
  }

  approveAnswer(id: any) {
    if (this.cookieService.get('token') && localStorage.getItem('roleType') === 'admin') {
      this.http.post(`http://localhost:8080/api/v1/answer/approve/${id}`,
        { },{
          headers: {
            'Authorization': this.auth.jsonWebToken
          }
        }).subscribe((response: any) => {
        if(response.status === 200) {
          this.getAnswersNotApproved()
        } else {
          alert(response.message)
        }
      })
    }
  }
  deleteAnswer(id: any) {
    if (this.cookieService.get('token') && localStorage.getItem('roleType') === 'admin') {
      this.http.delete(`http://localhost:8080/api/v1/answer/delete/${id}`,
        {
          headers: {
            'Authorization': this.auth.jsonWebToken
          }
        }).subscribe((response: any) => {
        if(response.status === 200) {
          this.getAnswersNotApproved()
        } else {
          alert(response.message)
        }
      })
    }
  }
}
