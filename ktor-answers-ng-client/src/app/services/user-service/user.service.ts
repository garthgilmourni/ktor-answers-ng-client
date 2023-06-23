import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/entity/user";
import {JsonUser} from "../../model/api/json-user";
import {remapUser} from "../../utilities/utils";

const url = "http://localhost:8080/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersSubject = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {
  }

  get users(): Observable<User[]> {
    return this.usersSubject;
  }

  getAll(): Observable<User[]> {
    return this.http.get<JsonUser[]>(url)
        .pipe(
            map(json => json.map(remapUser))
        );
  }

  getById(id: number): Observable<User> {
    return this.http.get<JsonUser>(`${url}/${id}`)
        .pipe(
            map(remapUser)
        );
  }

  refresh() {
    return this.getAll()
        .subscribe(questions => this.usersSubject.next(questions));
  }

  clear(): void {
    this.usersSubject.next([]);
  }
}
