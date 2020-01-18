import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Photo } from 'src/app/models/Photo.model';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  public upload(file){
    return this.http.post<Photo>(`${environment.url}/upload`, file,{
      reportProgress: true, observe: 'events'
    })
  }
}
