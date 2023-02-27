import {HttpClient} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats: any[] = []
  chatsFromReceiver: any[] = []
  chatsToReceiver: any[] = []

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  getUniqueChats = () => {
    if (this.cookieService.get('token')) {
      this.http.get(`http://localhost:8080/api/v1/chat/getChats`, {
        headers: {
          'Authorization': this.cookieService.get('token')
        }
      }).subscribe((response: any) => {
        console.log(response)
        this.chats = response.data
      })
    }
  }

  createChat = (chat: { message: string, receiver: string }) => {
    if (this.cookieService.get('token')) {
      this.http.post(`http://localhost:8080/api/v1/chat/add`, {
        message: chat.message,
        receiver: chat.receiver,
        datetime: new Date()
      }, {
        headers: {
          'Authorization': this.cookieService.get('token')
        }
      }).subscribe((response: any) => {
        console.log(response)
      })
    }
  }

  getChatWithReceiver(to_user: any) {
    if (this.cookieService.get('token')) {
      this.http.get(`http://localhost:8080/api/v1/chat/getChatsFromSenderToReceiver/${to_user}`, {
        headers: {
          'Authorization': this.cookieService.get('token')
        }
      }).subscribe((response: any) => {
        console.log(response)
        this.chatsToReceiver = response.data
      })
      this.http.get(`http://localhost:8080/api/v1/chat/getChatsToSenderFromReceiver/${to_user}`, {
        headers: {
          'Authorization': this.cookieService.get('token')
        }
      }).subscribe((response: any) => {
        console.log(response)
        if(response.status === 200) {
          this.chatsFromReceiver = response.data
        }
      })
    }
  }
}
