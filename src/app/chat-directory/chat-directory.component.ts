import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ChatService} from '../services/chat.service'
import {AuthenticationService} from '../services/authentication.service'

@Component({
  selector: 'app-chat-directory',
  templateUrl: './chat-directory.component.html',
  styleUrls: ['./chat-directory.component.css']
})
export class ChatDirectoryComponent {
  constructor(public chatService: ChatService, private router: Router, private auth: AuthenticationService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['/authentication'], {relativeTo: this.route, skipLocationChange: true})
    }
    this.chatService.getUniqueChats()
  }

  openChatWithReceiver(to_user: any) {
    localStorage.setItem('to_user', to_user)
    this.router.navigate(['/directMessage'], {relativeTo: this.route, skipLocationChange: true})
  }
}
