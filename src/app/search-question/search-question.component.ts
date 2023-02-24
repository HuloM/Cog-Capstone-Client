import { Component } from '@angular/core';
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
    this.questionSearchForm = new FormGroup({
      search: new FormControl(''),
      topic: new FormControl(''),
    })
  }

}
