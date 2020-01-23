import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError, Observable, of, EMPTY } from 'rxjs';
import { RegisterRequestDto } from '../models/dto/RegisterRequestDto';
import { LoginRequestDto } from '../models/dto/LoginRequestDto';
import { LoginResponseDto } from '../models/dto/LoginResponseDto';

import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url+"/auth"
  jwtHelper = new JwtHelperService()

  constructor(private http: HttpClient) { }


  public registerUser(body: RegisterRequestDto){
    return this.http.post(this.url+'/register', body)
    .pipe(
      catchError(this.handleError)
    )
  }

  public loginUser(body: LoginRequestDto){
    return this.http.post<LoginResponseDto>(this.url+'/login', body)
    .pipe(catchError(this.handleError))
  }
  
  handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      console.log(error)
    }else{

      return throwError({
        status: error.status,
        error: error.error
      })
    }
    
    return throwError("something bad happened , try again later")
  }

  isUserAuthenticated(): Observable<boolean>{
    const token = localStorage.getItem('_token')
    return of(token !== null)
  }

  getUserId(){
    const token = localStorage.getItem('_token')

    const userId = this.jwtHelper.decodeToken(token).id
    return userId;
  }

  logout(){
    localStorage.clear();
  }

}
