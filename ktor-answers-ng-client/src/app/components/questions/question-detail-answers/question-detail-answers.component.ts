import {Component, Input} from '@angular/core';
import {Question} from "../../../model/entity/question";

@Component({
  selector: 'app-question-detail-answers',
  templateUrl: './question-detail-answers.component.html',
  styleUrls: ['./question-detail-answers.component.css']
})
export class QuestionDetailAnswersComponent {
  @Input() question: Question | null = null;
}
