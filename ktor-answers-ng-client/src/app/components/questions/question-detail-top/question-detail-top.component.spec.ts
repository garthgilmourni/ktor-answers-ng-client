import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDetailTopComponent } from './question-detail-top.component';

describe('QuestionDetailTopComponent', () => {
  let component: QuestionDetailTopComponent;
  let fixture: ComponentFixture<QuestionDetailTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionDetailTopComponent]
    });
    fixture = TestBed.createComponent(QuestionDetailTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
