import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { QuestionsComponent } from './components/questions/questions.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AnswersComponent } from './components/answers/answers.component';
import {HttpClientModule} from "@angular/common/http";
import { QuestionCardComponent } from './components/question-card/question-card.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'answers', component: AnswersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    QuestionsComponent,
    HomeComponent,
    AnswersComponent,
    QuestionCardComponent
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
