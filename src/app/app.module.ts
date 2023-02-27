import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UserLoginSignupComponent} from './user-login-signup/user-login-signup.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {QuestionFormComponent} from './question-form/question-form.component';
import {AnswerFormComponent} from './question-page/answer-form/answer-form.component';
import {QuestionPageComponent} from './question-page/question-page.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {LoginFormComponent} from './user-login-signup/login-form/login-form.component';
import {SearchQuestionComponent} from './search-question/search-question.component';
import {AdminSignupComponent} from './admin-signup/admin-signup.component';
import {QuestionsTableComponent} from './search-question/questions-table/questions-table.component';
import {PendingQuestionComponent} from './pending-question/pending-question.component';
import {PendingAnswerComponent} from './pending-answer/pending-answer.component';
import {ChatDirectoryComponent} from './chat-directory/chat-directory.component';
import {DirectMessagesComponent} from './chat-directory/direct-messages/direct-messages.component';
import {CookieService} from 'ngx-cookie-service'
import {AuthenticationService} from './services/authentication.service';
import { QuestionAnswersComponent } from './question-page/question-answers/question-answers.component';
import { ChatFormComponent } from './chat-directory/chat-form/chat-form.component'

const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'question', component: QuestionPageComponent},
  {path: 'search', component: SearchQuestionComponent},
  {path: 'adminSignup', component: AdminSignupComponent},
  {path: 'authentication', component: UserLoginSignupComponent},
  {path: 'createQuestion', component: QuestionFormComponent},
  {path: 'pendingQuestion', component: PendingQuestionComponent},
  {path: 'pendingAnswer', component: PendingAnswerComponent},
  {path: 'chat', component: ChatDirectoryComponent},
  {path: 'directMessage', component: DirectMessagesComponent}
]

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
    SearchQuestionComponent,
    AdminSignupComponent,
    QuestionsTableComponent,
    PendingQuestionComponent,
    PendingAnswerComponent,
    ChatDirectoryComponent,
    DirectMessagesComponent,
    QuestionAnswersComponent,
    ChatFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' }),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
