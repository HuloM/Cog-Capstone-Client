import {Component} from '@angular/core';
import {QuestionService} from '../services/question.service'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {FileUploadFormatValidator} from '../question-form/file-upload-format.directive'

@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
  styleUrls: ['./search-question.component.css']
})
export class SearchQuestionComponent {
  constructor(private questionService: QuestionService) {
  }

  questionSearchForm !: FormGroup

  ngOnInit() {
    this.questionService.getQuestions()
    this.questionSearchForm = new FormGroup({
      search: new FormControl(''),
      topic: new FormControl(''),
    })
  }


  onSubmit() {
    if (this.questionSearchForm.value.topic === 'All' && !this.questionSearchForm.value.search) {
      console.log('All')
      this.questionService.getQuestions()
    } else if (this.questionSearchForm.value.search && this.questionSearchForm.value.topic && this.questionSearchForm.value.topic !== 'All') {
      console.log('Search and topic')
      this.questionService.getQuestionsBySearchAndTopic(this.questionSearchForm.value.search, this.questionSearchForm.value.topic)
    } else if (this.questionSearchForm.value.search || (this.questionSearchForm.value.search && this.questionSearchForm.value.topic === 'All')) {
      console.log('Search')
      this.questionService.getQuestionsBySearch(this.questionSearchForm.value.search)
    } else if (this.questionSearchForm.value.topic) {
      console.log('Topic')
      this.questionService.getQuestionsByTopic(this.questionSearchForm.value.topic)
    }
  }
}
