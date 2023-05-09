import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../../model/entity/question";
import {QuestionService} from "../../../services/question.service";

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  @Input() onNewQuestion: () => void
  @Output() selected = new EventEmitter<number>();

  constructor(public questionService: QuestionService) {
    this.onNewQuestion = () => console.log("No handler for new question event");
  }

  ngOnInit(): void {
    this.questionService.refresh();
  }

  questionSelected(id: number) {
    this.selected.emit(id);
  }
}
