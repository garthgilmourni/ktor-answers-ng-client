import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDetailAnswersComponent } from './question-detail-answers.component';

describe('QuestionDetailAnswersComponent', () => {
  let component: QuestionDetailAnswersComponent;
  let fixture: ComponentFixture<QuestionDetailAnswersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionDetailAnswersComponent]
    });
    fixture = TestBed.createComponent(QuestionDetailAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
