import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  url = ""
  constructor(private http: HttpClient, private endpoint: string) { 
    this.url = environment.url+endpoint
  }

  public getAll(){
    return this.http.get(this.url)
  }
  

}
