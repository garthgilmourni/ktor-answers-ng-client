import { TestBed } from '@angular/core/testing';

import { DummyQuestionService } from './dummy-question.service';

describe('QuestionService', () => {
  let service: DummyQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
