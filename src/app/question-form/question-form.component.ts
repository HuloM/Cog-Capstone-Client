import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {QuestionService} from '../services/question.service'
import {FileUploadFormatValidator} from './file-upload-format.directive'

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  constructor(private questionService: QuestionService) {
  }
  file !: File
  fileSize: number = 0
  questionForm !: FormGroup

  ngOnInit() {
    this.questionForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(25),
      ]),
      topic: new FormControl('', [
        Validators.required,
      ]),
      file: new FormControl('', [
        Validators.required,
        FileUploadFormatValidator()
      ])
    })
  }

  onChange(event: any) {
    this.file = event.target.files[0];
    this.fileSize = this.file.size
    console.log(this.file.size)

    console.log(this.file)
  }

  onUpload() {
    console.log(this.questionForm.value);

    console.log(typeof this.questionForm.value.file);
    console.log(typeof this.file);
    console.log( new Date());

    this.questionService.createQuestion({
      title: this.questionForm.value.title,
      description_question: this.questionForm.value.description,
      topic: this.questionForm.value.topic,
      file: this.file
    })
  }
}
