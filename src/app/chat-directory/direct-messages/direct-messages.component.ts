import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.css']
})
export class DirectMessagesComponent {
  messageReceiver !: string
  chatForm !: FormGroup
  constructor(public chatService: ChatService) {
  }

  ngOnInit() {
    this.messageReceiver = localStorage.getItem('to_user')!
    this.chatForm = new FormGroup({
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    })
    this.chatService.getChatWithReceiver(this.messageReceiver)
  }

  onSend() {
    this.chatService.createChat({
      message: this.chatForm.value.message,
      receiver: this.messageReceiver
    })
  }
}
