import {Component, Input} from '@angular/core';
import {Question} from "../../model/entity/question";

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent {
  @Input() question!: Question;
}
