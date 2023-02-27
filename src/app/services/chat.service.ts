import {HttpClient} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import {Injectable} from '@angular/core'
import {AuthenticationService} from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats: any[] = []
  chatsFromReceiver: any[] = []
  chatsToReceiver: any[] = []

  constructor(private http: HttpClient, private cookieService: CookieService, private auth: AuthenticationService) {
  }

  getUniqueChats = () => {
    if (this.auth.jsonWebToken) {
      this.http.get(`http://localhost:8080/api/v1/chat/getChats`, {
        headers: {
          'Authorization': this.auth.jsonWebToken
        }
      }).subscribe((response: any) => {
        console.log(response)
        this.chats = response.data
      })
    }
  }

  createChat = (chat: { message: string, receiver: string }) => {
    if (this.auth.jsonWebToken) {
      this.http.post(`http://localhost:8080/api/v1/chat/add`, {
        message: chat.message,
        receiver: chat.receiver,
        datetime: new Date()
      }, {
        headers: {
          'Authorization': this.auth.jsonWebToken
        }
      }).subscribe((response: any) => {
        if(response.status === 200) {
          this.getUniqueChats()
        }
        else if(response.status === 400) {
          alert(response.message)
        }
      })
    }
  }

  createChatFromExisting = (chat: { message: string, receiver: string }) => {
    if (this.auth.jsonWebToken) {
      this.http.post(`http://localhost:8080/api/v1/chat/add`, {
        message: chat.message,
        receiver: chat.receiver,
        datetime: new Date()
      }, {
        headers: {
          'Authorization': this.auth.jsonWebToken
        }
      }).subscribe((response: any) => {
        if(response.status === 200) {
          this.getChatWithReceiver(chat.receiver)
        }
        else if(response.status === 400) {
          alert(response.message)
        }
      })
    }
  }

  getChatWithReceiver(to_user: any) {
    if (this.auth.jsonWebToken) {
      this.http.get(`http://localhost:8080/api/v1/chat/getChatsFromSenderToReceiver/${to_user}`, {
        headers: {
          'Authorization': this.auth.jsonWebToken
        }
      }).subscribe((response: any) => {
        console.log(response)
        this.chatsToReceiver = response.data
      })
      this.http.get(`http://localhost:8080/api/v1/chat/getChatsToSenderFromReceiver/${to_user}`, {
        headers: {
          'Authorization': this.auth.jsonWebToken
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
