import { Component } from '@angular/core';
import {Router} from '@angular/router'
import {QuestionService} from '../../services/question.service'

@Component({
  selector: 'app-questions-table',
  templateUrl: './questions-table.component.html',
  styleUrls: ['./questions-table.component.css']
})
export class QuestionsTableComponent {
  constructor(private router: Router, public questionService: QuestionService) {
  }

  async ngOnInit() {
    this.questionService.getQuestions()
  }

  onHighlightQuestion(id: number) {
    console.log(id)
    localStorage.setItem('questionId', id.toString())
    let question = this.questionService.questions.find(q => q.id === id)
    localStorage.setItem('image_src', question!.image_src)
    this.router.navigate(['/question'])
  }
}
