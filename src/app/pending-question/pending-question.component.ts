import { Component } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-pending-question',
  templateUrl: './pending-question.component.html',
  styleUrls: ['./pending-question.component.css']
})
export class PendingQuestionComponent {

    constructor(public questionService: QuestionService) { }

    ngOnInit() {
      this.questionService.getQuestionsNotApproved()
    }

  onApproveQuestion(id: any) {
    this.questionService.approveQuestion(id)
  }

  onRejectQuestion(id: any) {
    this.questionService.deleteQuestion(id)
  }
}
