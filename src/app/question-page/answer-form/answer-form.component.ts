import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {FileUploadFormatValidator} from '../../question-form/file-upload-format.directive'
import {AuthenticationService} from '../../services/authentication.service'
import {AnswerService} from '../../services/answer.service'

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent {
  constructor(private answerService: AnswerService, private authService: AuthenticationService) {
  }
  @Input() questionId !: number

  answer: string = "";
  file !: File
  answerForm !: FormGroup

  ngOnInit() {
    this.answerForm = new FormGroup({
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      file: new FormControl('', [
        Validators.required,
        FileUploadFormatValidator()
      ])
    })
  }

  onChange(event: Event) {
    this.file = (event.target as HTMLInputElement).files![0];
  }

  onUpload() {
    this.answerService.createAnswer({
      description_answer: this.answerForm.value.description,
      file: this.file,
      question_id: this.questionId,
      create_by: this.authService.user.username,
      datetime: new Date()
    })
  }
}
