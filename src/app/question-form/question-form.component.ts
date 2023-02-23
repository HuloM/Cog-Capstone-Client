import { Component } from '@angular/core';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  title: string = "";
  description: string = "";
  topic: string = "";
  file: File | null = null

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    console.log(this.file);
    // this.fileUploadService.upload(this.file).subscribe(
    //   (event: any) => {
    //     if (typeof (event) === 'object') {
    //
    //       // Short link via api response
    //       this.shortLink = event.link;
    //
    //       this.loading = false; // Flag variable
    //     }
    //   }
    // );
  }
}
