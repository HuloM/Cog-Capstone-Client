import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserLoginSignupComponent } from './user-login-signup/user-login-signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { AnswerFormComponent } from './question-page/answer-form/answer-form.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { SignupFormComponent } from './user-login-signup/signup-form/signup-form.component';
import { LoginFormComponent } from './user-login-signup/login-form/login-form.component';
import { SearchQuestionComponent } from './search-question/search-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginSignupComponent,
    LandingPageComponent,
    QuestionFormComponent,
    AnswerFormComponent,
    QuestionPageComponent,
    SignupFormComponent,
    LoginFormComponent,
    SearchQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
