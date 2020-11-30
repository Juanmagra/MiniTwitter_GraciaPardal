import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tweet } from '../models/tweetResp';

const BASE_URL = 'https://www.minitwitter.com:3001/apiv1/';
const authorization = localStorage.getItem('token');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '+ authorization})
};
@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) { }

  allTweets():Observable<[Tweet]>{
    return this.http.get<[Tweet]>(
      BASE_URL +'tweets/all',
      httpOptions
    );

  }

  tweetFav(idTweetF:number):Observable<Tweet>{
    return this.http.post<Tweet>(
      BASE_URL + 'tweets/like/'+idTweetF,null,
      httpOptions
    );

  }

}
