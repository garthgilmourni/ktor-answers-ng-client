import { Injectable } from '@angular/core';
import {Question} from "../../model/entity/question";
import {User} from "../../model/entity/user";

@Injectable({
  providedIn: 'root'
})
export class DummyQuestionService {
  constructor() { }

  public fetchQuestions(): Array<Question> {
    let jane = new User(1, "registered", new Date(), "https://jane.com", "London", "A Registered User");
    let dave = new User(2, "unregistered", new Date(), "https://dave.com", "Paris", "An Unregistered User");
    let mary = new User(3, "moderator", new Date(), "https://mary.com", "Munich", "A Moderator");

    return [
      new Question(1, "question", new Date(), new Date(), new Date(), "https://a.com", "what", "WHAT", [], 1, 2, jane, false, 1, []),
      new Question(2, "question", new Date(), new Date(), new Date(), "https://b.com", "where", "WHERE", [], 1, 2, dave, false, 1, []),
      new Question(3, "question", new Date(), new Date(), new Date(), "https://c.com", "when", "WHEN", [], 1, 2, mary, false, 1, []),
      new Question(4, "question", new Date(), new Date(), new Date(), "https://d.com", "why", "WHY", [], 1, 2, jane, false, 1, []),
      new Question(5, "question", new Date(), new Date(), new Date(), "https://e.com", "who", "WHO", [], 1, 2, dave, false, 1, []),
      new Question(6, "question", new Date(), new Date(), new Date(), "https://f.com", "how", "HOW", [], 1, 2, mary, false, 1, [])
    ]
  }
}
