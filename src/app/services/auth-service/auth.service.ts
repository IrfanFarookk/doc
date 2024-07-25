import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token!: string;

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = 'http://localhost:5000/user/login';
    const userPayload = {
      emailId: email,
      password: password
    };
    return this.httpClient.post(url, userPayload);
  }

  setUserToken(token: string) {
    this.token = token;
  }

  getUserToken(): string {
    return this.token;
  }

}
