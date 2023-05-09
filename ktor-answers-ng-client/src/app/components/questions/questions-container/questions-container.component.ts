import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-container',
  templateUrl: './questions-container.component.html',
  styleUrls: ['./questions-container.component.css']
})
export class QuestionsContainerComponent {
  selectedQuestionID : number = -1;
  singleQuestionSelected = false;

  questionSelected(id: number) {
    this.singleQuestionSelected = true;
    this.selectedQuestionID = id;
  }

  questionDeSelected(id: number) {
    this.singleQuestionSelected = false;
    this.selectedQuestionID = -1;
  }
}
