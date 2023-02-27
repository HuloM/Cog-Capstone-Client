import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import {AuthenticationService} from '../../services/authentication.service'

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.css']
})
export class DirectMessagesComponent {
  messageReceiver !: string
  chatForm !: FormGroup
  constructor(public chatService: ChatService, private router: Router, private auth: AuthenticationService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['/authentication'], {relativeTo: this.route, skipLocationChange: true})
    }
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
    this.chatService.createChatFromExisting({
      message: this.chatForm.value.message,
      receiver: this.messageReceiver
    })
  }
}
