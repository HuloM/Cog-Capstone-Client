import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {CookieService} from 'ngx-cookie-service'
import {Router, ActivatedRoute} from '@angular/router'
import {AuthenticationService} from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions !: any[]
  currQuestion !: any
  currQuestionImage !: any

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router, private auth: AuthenticationService, private route: ActivatedRoute) {

  }

  getQuestions = () => {
    if (this.auth.jsonWebToken) {
      this.http.get('http://localhost:8080/api/v1/question/getAll', {
        headers: {
          'Authorization': this.auth.jsonWebToken
        }
      }).subscribe((response: any) => {
        if(response.status === 200) {
          this.questions = response.data
        } else {
          alert(response.message)
        }
      })
    }
  }
  getQuestionsNotApproved = () => {
    if (this.auth.jsonWebToken && localStorage.getItem('roleType') === 'admin') {
      this.http.get('http://localhost:8080/api/v1/question/getAllNotApproved', {
        headers: {
          'Authorization': this.auth.jsonWebToken
        }
      }).subscribe((response: any) => {
        if(response.status === 200) {
          this.questions = response.data
        } else {
          alert(response.message)
        }
      })
    }
  }
  getQuestionById = (id: number) => {
    if (this.auth.jsonWebToken) {
      this.http.get(`http://localhost:8080/api/v1/question/getById/${id}`, {
        headers: {
          'Authorization': this.auth.jsonWebToken
        }
      }).subscribe((response: any) => {
        if(response.status === 200) {
          this.currQuestion = response.data
        } else {
          alert(response.message)
        }
      })
    }
  }
  getQuestionsByTopic = (topic: string) => {
    if (this.auth.jsonWebToken) {
      console.log(topic)
      this.http.get(`http://localhost:8080/api/v1/question/getByTopic?topic=${topic}`, {
        headers: {
          'Authorization': this.auth.jsonWebToken
        }
      }).subscribe((response: any) => {
        if (response.status === 200) {
          this.questions = response.data
        } else {
          alert(response.message)
        }
      })
    }
  }
  createQuestion = (question: { description_question: string, topic: string, title: string, file: File }) => {
    if (this.auth.jsonWebToken) {
      const form = new FormData()
      form.append('description_question', question.description_question)
      form.append('topic', question.topic)
      form.append('title', question.title)
      form.append('datetime', new Date().toString())
      form.append('created_by', localStorage.getItem('username') as string)
      form.append('file', question.file)
      this.http.post(`http://localhost:8080/api/v1/question/add`,
        form, {
          headers: {
            'Authorization': this.auth.jsonWebToken
          }
        }).subscribe((response: any) => {
        if (response.status === 200) {
          this.questions = response.data
          this.router.navigate(['/search'], {
            relativeTo: this.route,
            skipLocationChange: true
          })
        } else {
          alert(response.message)
        }
      })
    }
  }

  approveQuestion(id: any) {
    if (this.auth.jsonWebToken && localStorage.getItem('roleType') === 'admin') {
      this.http.post(`http://localhost:8080/api/v1/question/approve/${id}`,
        {}, {
          headers: {
            'Authorization': this.auth.jsonWebToken
          }
        }).subscribe((response: any) => {
        if(response.status === 200) {
          this.getQuestionsNotApproved()
        } else {
          alert(response.message)
        }
      })
    }
  }

  deleteQuestion(id: any) {
    if (this.auth.jsonWebToken && localStorage.getItem('roleType') === 'admin') {
      this.http.delete(`http://localhost:8080/api/v1/question/delete/${id}`,
        {
          headers: {
            'Authorization': this.auth.jsonWebToken
          }
        }).subscribe((response: any) => {
        if(response.status === 200) {
          this.getQuestionsNotApproved()
        } else {
          alert(response.message)
        }
      })
    }
  }

  getQuestionsBySearchAndTopic(search: string, topic: string) {
    if (this.cookieService.get('token')) {
      console.log(topic)
      this.http.get(`http://localhost:8080/api/v1/question/getLikeTitleAndTopic?topic=${topic}&title=${search}`, {
        headers: {
          'Authorization': this.cookieService.get('token')
        }
      }).subscribe((response: any) => {
        if (response.status === 200) {
          this.questions = response.data
        } else {
          alert(response.message)
        }
      })
    }
  }

  getQuestionsBySearch(search: string) {
    if (this.cookieService.get('token')) {
      this.http.get(`http://localhost:8080/api/v1/question/getLikeTitle?title=${search}`, {
        headers: {
          'Authorization': this.cookieService.get('token')
        }
      }).subscribe((response: any) => {
        if (response.status === 200) {
          console.log(response)
          this.questions = response.data
        } else {
          alert(response.message)
        }
      })
    }
  }
}
