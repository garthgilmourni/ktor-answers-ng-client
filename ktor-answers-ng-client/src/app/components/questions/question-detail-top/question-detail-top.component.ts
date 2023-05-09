import {Component, Input} from '@angular/core';
import {Question} from "../../../model/entity/question";

@Component({
  selector: 'app-question-detail-top',
  templateUrl: './question-detail-top.component.html',
  styleUrls: ['./question-detail-top.component.css']
})
export class QuestionDetailTopComponent {
  @Input() question: Question | null = null;
  @Input() onFinished: () => void;

  constructor() {
    this.onFinished = () => console.log("onFinished handler not set");
  }
}
