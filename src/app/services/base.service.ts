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

  
  public get httpClient() : HttpClient {
    return this.http;
  }
  

  public getAll(){
    return this.http.get<T[]>(this.url)
  }

  public delete(id: number){
    return this.http.delete(this.url+"/delete/"+id)
  }
  

}
