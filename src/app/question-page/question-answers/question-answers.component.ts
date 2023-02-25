import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.css']
})
export class QuestionAnswersComponent {
  @Input() answer: any

  constructor() {
  }

  ngOnInit() {
  }
}
