import { UserModel } from './models/user.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class UserService {

  public userEvents: Subject<UserModel> = new Subject<UserModel>();

  constructor(private http: Http) {}

  register(login: string, password: string, birthYear: number): Observable<UserModel> {
    const baseUrl = 'http://ponyracer.ninja-squad.com/api/users';
    const user = {login, password, birthYear};
    return this.http.post(baseUrl, user)
      .map(res => res.json());
  }

  authenticate(credentials: {login: string; password: string}): Observable<UserModel> {
    const baseUrl = 'http://ponyracer.ninja-squad.com/api/users/authentication';
    return this.http.post(baseUrl, credentials)
      .map(res => res.json())
      .do((user: UserModel) => this.userEvents.next(user));
  }
}
