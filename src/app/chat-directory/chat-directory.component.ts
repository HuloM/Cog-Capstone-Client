import { Component } from '@angular/core';
import {ChatService} from '../services/chat.service'

@Component({
  selector: 'app-chat-directory',
  templateUrl: './chat-directory.component.html',
  styleUrls: ['./chat-directory.component.css']
})
export class ChatDirectoryComponent {
  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getUniqueChats()
  }

  openChatWithReceiver(to_user: any) {
    this.chatService.getChatWithReceiver(to_user)
  }
}
