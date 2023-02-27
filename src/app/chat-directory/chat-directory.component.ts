import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ChatService} from '../services/chat.service'

@Component({
  selector: 'app-chat-directory',
  templateUrl: './chat-directory.component.html',
  styleUrls: ['./chat-directory.component.css']
})
export class ChatDirectoryComponent {
  constructor(public chatService: ChatService, private router: Router) { }

  ngOnInit() {
    this.chatService.getUniqueChats()
  }

  openChatWithReceiver(to_user: any) {
    localStorage.setItem('to_user', to_user)
    this.router.navigate(['/directMessage'])
  }
}
