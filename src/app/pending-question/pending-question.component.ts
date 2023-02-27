import { Component } from '@angular/core';
import { QuestionService } from '../services/question.service';
import {AuthenticationService} from '../services/authentication.service'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-pending-question',
  templateUrl: './pending-question.component.html',
  styleUrls: ['./pending-question.component.css']
})
export class PendingQuestionComponent {

    constructor(public questionService: QuestionService, private auth: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
      if (!this.auth.isLoggedIn || !this.auth.isAdmin) {
        this.router.navigate(['/authentication'], {relativeTo: this.route, skipLocationChange: true})
      }
      this.questionService.getQuestionsNotApproved()
    }

  onApproveQuestion(id: any) {
    this.questionService.approveQuestion(id)
  }

  onRejectQuestion(id: any) {
    this.questionService.deleteQuestion(id)
  }
}
