import {Component, OnInit} from '@angular/core';
import {Question} from "../../model/entity/question";
import {QuestionService} from "../../services/question.service";

@Component({
  selector: 'app-center-content',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(public questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.questionService.refresh();
  }
}
