import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JsonQuestion} from "../model/api/json-question";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Question} from "../model/entity/question";
import {JsonUser} from "../model/api/json-user";
import {User} from "../model/entity/user";
import {JsonComment} from "../model/api/json-comment";
import {PostComment} from "../model/entity/post-comment";
import {JsonAnswer} from "../model/api/json-answer";
import {Answer} from "../model/entity/answer";
import {PostType} from "../model/post-type";

const url = "http://localhost:8080/questions";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionsSubject = new BehaviorSubject<Question[]>([]);

  constructor(private http: HttpClient) {
  }

  get questions(): Observable<Question[]> {
    return this.questionsSubject;
  }

  getAll(): Observable<Question[]> {
    return this.http.get<JsonQuestion[]>(url)
      .pipe(
        map(json => json.map(remapQuestion))
      );
  }

  getById(id: number): Observable<Question> {
    return this.http.get<JsonQuestion>(`${url}/${id}`)
        .pipe(
            map(remapQuestion)
        );
  }

  deleteById(id: number): Observable<Question> {
    return this.http.delete<any>(`${url}/${id}`);
  }

  refresh() {
    return this.getAll()
      .subscribe(questions => this.questionsSubject.next(questions));
  }

  clear(): void {
    this.questionsSubject.next([]);
  }
}

function remapQuestion(json: JsonQuestion): Question {
  return new Question(
    json.post_id,
    json.post_type,
    new Date(json.creation_date),
    new Date(json.last_activity_date),
    new Date(json.last_edit_date),
    json.link,
    json.title,
    json.body,
    remapComments(json.comments),
    json.up_vote_count,
    json.down_vote_count,
    remapUser(json.owner),
    json.is_answered,
    json.accepted_answer_id,
    remapAnswers(json.answers)
  )
}

function remapUser(json: JsonUser): User {
  return new User(
    json.user_id,
    json.user_type,
    new Date(json.creation_date),
    json.link,
    json.location,
    json.about_me
  )
}

function remapComments(jsonArray: JsonComment[]): PostComment[] {
  return jsonArray.map(json => new PostComment(
      json.comment_id,
      remapUser(json.owner),
      json.post_id,
      json.body
  ));
}

function remapAnswers(jsonArray: JsonAnswer[]): Answer[] {
  return jsonArray.map(json => new Answer(
      json.post_id,
      json.post_type,
      new Date(json.creation_date),
      new Date(json.last_activity_date),
      new Date(json.last_edit_date),
      json.link,
      json.title,
      json.body,
      remapComments(json.comments),
      json.up_vote_count,
      json.down_vote_count,
      remapUser(json.owner),
      json.accepted,
      json.question_id
  ));
}