import { Injectable } from '@angular/core';
import { BaseService } from '../services/base.service';
import { User } from '../models/User.Model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  jwtHelper = new JwtHelperService();
  authorizationHeader: HttpHeaders

  private readonly authToken = localStorage.getItem('_token');

  constructor(http: HttpClient) {
    super(http, "/auth")

    this.authorizationHeader = new HttpHeaders({
      "Authorization":"Bearer "+this.authToken
    })
   }

public getUser(){
    
  return this.httpClient.get<User>(this.url+"/me", {
    headers: this.authorizationHeader
  })

   }
}
