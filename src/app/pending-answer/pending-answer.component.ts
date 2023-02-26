import { Component } from '@angular/core';
import { AnswerService } from '../services/answer.service';

@Component({
  selector: 'app-pending-answer',
  templateUrl: './pending-answer.component.html',
  styleUrls: ['./pending-answer.component.css']
})
export class PendingAnswerComponent {

    constructor(public answerService: AnswerService) { }

    ngOnInit() {
        this.answerService.getAnswersNotApproved()
    }

    onApproveAnswer(id: any) {
      this.answerService.approveAnswer(id)
    }

    onRejectAnswer(id: any) {
      this.answerService.deleteAnswer(id)
    }
}
