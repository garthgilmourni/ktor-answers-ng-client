import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JsonQuestion} from "../../model/api/json-question";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Question} from "../../model/entity/question";
import {remapQuestion, unmapQuestion} from "../../utilities/utils";

const url = "http://localhost:8080/questions2";

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

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`${url}/${id}`);
  }

  createQuestion(question: Question): Observable<any> {
    return this.http.post(`${url}`, unmapQuestion(question));
  }

  refresh() {
    return this.getAll()
      .subscribe(questions => this.questionsSubject.next(questions));
  }

  clear(): void {
    this.questionsSubject.next([]);
  }
}