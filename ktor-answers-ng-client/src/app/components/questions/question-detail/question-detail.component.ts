import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionService} from "../../../services/question-service/question.service";
import {Question} from "../../../model/entity/question";

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  @Input() id: number = 0;
  @Output() finished = new EventEmitter<number>();

  question: Question | null = null;

  constructor(public questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.questionService
        .getById(this.id)
        .subscribe(question => this.question = question)
  }

  finishedWithQuestion() {
    this.finished.emit(this.id)
  }
}
