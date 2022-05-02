import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { SignInRequestModel } from '../models/sign-in-request.model';

@Injectable({
  providedIn:'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>("http://localhost:3000/users");
  }
  AddNewProfile(input:any){
    return this.http.post<any>("http://localhost:3000/users",input);
  }
}