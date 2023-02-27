import { Component } from '@angular/core';
import { AnswerService } from '../services/answer.service';
import {AuthenticationService} from '../services/authentication.service'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-pending-answer',
  templateUrl: './pending-answer.component.html',
  styleUrls: ['./pending-answer.component.css']
})
export class PendingAnswerComponent {

    constructor(public answerService: AnswerService, private auth: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        if (!this.auth.isLoggedIn || !this.auth.isAdmin) {
          this.router.navigate(['/authentication'], {relativeTo: this.route, skipLocationChange: true})
        }
        this.answerService.getAnswersNotApproved()
    }

    onApproveAnswer(id: any) {
      this.answerService.approveAnswer(id)
    }

    onRejectAnswer(id: any) {
      this.answerService.deleteAnswer(id)
    }
}
