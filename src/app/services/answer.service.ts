import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {CookieService} from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient, private cookieService: CookieService) {
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
          'Authorization': this.cookieService.get('token')
        }
      }).subscribe((response: any) => {
        console.log(response)
      })
    }
  }

  getAnswersByQuestionId = (id: number) => {
    if (this.cookieService.get('token')) {
      this.http.get(`http://localhost:8080/api/v1/answer/getByQuestionId/${id}`, {
        headers: {
          'Authorization': this.cookieService.get('token')
        }
      }).subscribe((response: any) => {
        console.log(response)
        this.answers = response.data
      })
    }
  }
}
