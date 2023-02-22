import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserLoginSignupComponent } from './user-login-signup/user-login-signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { QuestionPageComponent } from './question-page/question-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginSignupComponent,
    LandingPageComponent,
    QuestionFormComponent,
    AnswerFormComponent,
    QuestionPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
