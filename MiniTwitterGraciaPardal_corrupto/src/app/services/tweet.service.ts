import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tweet, User } from '../models/TweetResponse';

const ALLTWEET_URL = 'https://www.minitwitter.com:3001/apiv1/tweets/all';
const authorization = localStorage.getItem('token');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '+ authorization.toString()  })
};
@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) { }

  allTweets():Observable<[Tweet]>{
    return this.http.get<[Tweet]>(
      ALLTWEET_URL,
      httpOptions
    );

  }
}
