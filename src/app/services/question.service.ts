import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {CookieService} from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions !: any[]
  currQuestion !: any
  currQuestionImage !: any
  constructor(private http: HttpClient, private cookieService: CookieService) {

  }

  getQuestions = () => {
    if (this.cookieService.get('token')) {
      this.http.get('http://localhost:8080/api/v1/question/getAll', {
        headers: {
          'Authorization': this.cookieService.get('token')
        }
      }).subscribe((response: any) => {
        console.log(response.data)
        this.questions = response.data
      })
    }
  }
  getQuestionsNotApproved = () => {
    if (this.cookieService.get('token') && localStorage.getItem('roleType') === 'admin') {
      this.http.get('http://localhost:8080/api/v1/question/getAllNotApproved', {
        headers: {
          'Authorization': this.cookieService.get('token')
        }
      }).subscribe((response: any) => {
        this.questions = response.data
        console.log(this.questions)
      })
    }
  }
  getQuestionById = (id: number) => {
    if (this.cookieService.get('token')){
      this.http.get(`http://localhost:8080/api/v1/question/getById/${id}`, {
        headers: {
          'Authorization': this.cookieService.get('token')
        }
      }).subscribe((response: any) => {
        console.log(response.data)
        this.currQuestion = response.data
      })
    }
  }
  getQuestionsByTopic = (topic: string) => {
    if (this.cookieService.get('token')){
      this.http.get(`http://localhost:8080/api/v1/question/getById/${topic}`, {
        headers: {
          'Authorization': this.cookieService.get('token')
        }
      }).subscribe((response: any) => {
        this.questions = response.data
        console.log(this.questions)
      })
    }
  }
  createQuestion = (question: {description_question: string, topic: string, title: string, file: File}) => {
    if (this.cookieService.get('token')){
      const form = new FormData()
      form.append('description_question', question.description_question)
      form.append('topic', question.topic)
      form.append('title', question.title)
      form.append('datetime', new Date().toString())
      form.append('created_by', localStorage.getItem('username') as string)
      form.append('file', question.file)
      this.http.post(`http://localhost:8080/api/v1/question/add`,
        form,{
        headers: {
          'Authorization': this.cookieService.get('token')
        }
      }).subscribe((response: any) => {
        this.questions = response.data
        console.log(this.questions)
      })
    }
  }
}
