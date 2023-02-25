import {Component, Input} from '@angular/core';
import { AnswerService } from '../services/answer.service';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent {
  image_src !: string
  constructor(public questionService: QuestionService, public answerService: AnswerService) {
  }

  async ngOnInit() {
    const id = localStorage.getItem('questionId') ?
      parseInt(localStorage.getItem('questionId')!) : 0
    this.image_src = localStorage.getItem('image_src') ?
      localStorage.getItem('image_src')! : ''
    this.questionService.getQuestionById(id)
    this.answerService.getAnswersByQuestionId(id)
    console.log(this.answerService.answers)
  }

}
