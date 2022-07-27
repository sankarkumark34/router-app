import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  userLogin(email : string,password:string): Observable<any> {
    return this.http.post('https://neox.c1exchange.com:4000/auth/login',{email,password})
  } 
}