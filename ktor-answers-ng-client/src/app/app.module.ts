import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { NavigationBarComponent } from './components/header/navigation-bar/navigation-bar.component';
import { QuestionsListComponent } from './components/questions/questions-list/questions-list.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AnswersComponent } from './components/answers/answers.component';
import {HttpClientModule} from "@angular/common/http";
import { QuestionCardComponent } from './components/questions/question-card/question-card.component';
import { QuestionsContainerComponent } from './components/questions/questions-container/questions-container.component';
import { QuestionDetailComponent } from './components/questions/question-detail/question-detail.component';
import { UsersComponent } from './components/users/users.component';
import { QuestionDetailTopComponent } from './components/questions/question-detail-top/question-detail-top.component';
import { QuestionDetailAnswersComponent } from './components/questions/question-detail-answers/question-detail-answers.component';
import { QuestionFormComponent } from './components/questions/question-form/question-form.component';
import { CommentsDisplayComponent } from './components/comments/comments-display/comments-display.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'questions', component: QuestionsContainerComponent},
  {path: 'answers', component: AnswersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    QuestionsListComponent,
    HomeComponent,
    AnswersComponent,
    QuestionCardComponent,
    QuestionsContainerComponent,
    QuestionDetailComponent,
    UsersComponent,
    QuestionDetailTopComponent,
    QuestionDetailAnswersComponent,
    QuestionFormComponent,
    CommentsDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
