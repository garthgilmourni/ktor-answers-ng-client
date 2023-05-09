import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  @Output() closed = new EventEmitter<boolean>();

  formClosed(success: boolean) {
    this.closed.emit(success)
  }
}
