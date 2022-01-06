import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomUser, Result, RootObject } from './random-user'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  url = 'https://randomuser.me/api/?results=1';

  constructor(private http: HttpClient) { }

  getRandomUser(): Observable<RandomUser> {
    return this.http.get<RootObject>(this.url).pipe(
      map(response => {
        const resultData: Result = response.results[0];
        return new RandomUser(resultData.gender, resultData.name, resultData.location, resultData.email, resultData.login, resultData.dob, resultData.registered,
          resultData.phone, resultData.cell, resultData.id, resultData.picture, resultData.nat)
      })
    );
  }
}
