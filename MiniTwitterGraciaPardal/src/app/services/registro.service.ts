import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingUpRequest } from '../models/SignUpReq';
import { SingUpResp } from '../models/SingUpResp';
import { Observable } from 'rxjs';


const LOGIN_URL = 'https://www.minitwitter.com:3001/apiv1/auth/signup';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  registro(singUp: SingUpRequest): Observable<SingUpResp> {
    return this.http.post<SingUpResp>(
      LOGIN_URL,
      singUp,
      httpOptions
    );
  }
}
