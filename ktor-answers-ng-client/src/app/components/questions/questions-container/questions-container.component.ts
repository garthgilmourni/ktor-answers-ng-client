import { Component } from '@angular/core';
import {QuestionsContainerStates} from "./questions-container-states";

@Component({
  selector: 'app-questions-container',
  templateUrl: './questions-container.component.html',
  styleUrls: ['./questions-container.component.css']
})
export class QuestionsContainerComponent {
  currentState: QuestionsContainerStates = "ShowingAllQuestions"
  selectedQuestionID : number = -1;

  questionSelected(id: number) {
    this.currentState = "ShowingSingleQuestion"
    this.selectedQuestionID = id;
  }

  questionDeSelected(id: number) {
    this.currentState = "ShowingAllQuestions"
    this.selectedQuestionID = -1;
  }

  newQuestion() {
    this.currentState = "AddingQuestion"
  }

  questionFormComplete(successful: boolean) {
    this.currentState = "ShowingAllQuestions"
  }
}
