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

export const routes: Routes = [
  {path: '', component: HomeComponent},
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
    QuestionDetailComponent
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
