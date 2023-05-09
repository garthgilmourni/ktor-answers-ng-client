import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Question} from "../../../model/entity/question";

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent {
  @Input() question!: Question;
  @Output() selected = new EventEmitter<number>();
  @Output() deleted = new EventEmitter<number>();

  bodySummary(): string {
    if(this.question.body.length < 200) {
      return this.question.body;
    } else {
      return this.question.body.substring(0, 200);
    }
  }

    selectQuestion() {
        this.selected.emit(this.question.post_id)
    }

    deleteQuestion() {
      this.deleted.emit(this.question.post_id)
    }
}
