import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { ChatService } from 'src/app/services/chat.service';
import {FileUploadFormatValidator} from '../../question-form/file-upload-format.directive'

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent {
  chatForm !: FormGroup

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatForm = new FormGroup({
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      receiver: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    })
  }

  onSend() {
    this.chatService.createChat({
      message: this.chatForm.value.message,
      receiver: this.chatForm.value.receiver
    })
  }
}
