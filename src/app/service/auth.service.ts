import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../components/signup/signup.model';
import { login } from '../components/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string="https://localhost:7169/api/Customers";
  customer: Customer | null=null;
  constructor(private http:HttpClient){}
  signup(signupRequest: Customer): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, signupRequest);
  }

  signin(signinRequest: login): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, signinRequest);
  }

  }

