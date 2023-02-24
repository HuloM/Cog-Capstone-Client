import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {FileUploadFormatValidator} from '../../question-form/file-upload-format.directive'

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent {
  answer: string = "";
  file: File | null = null
  answerForm !: FormGroup

  ngOnInit() {
    this.answerForm = new FormGroup({
      answer: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      file: new FormControl('', [
        Validators.required,
        FileUploadFormatValidator()
      ])
    })
  }

  onChange(event: any) {
    this.file = event.target.files[0];
    console.log(this.file)
  }
}
