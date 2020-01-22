import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseService } from '../base.service';
import { Color } from 'src/app/models/Color.model';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';
import { Page } from 'src/app/models/page.model';

@Injectable({
  providedIn: 'root'
})
export class ColorService extends BaseService<Color> {

  constructor(http: HttpClient) {
    super(http, "/color")
   }

   public getPaginatedColor(payload?: PageRequestDto) {

    if (payload !== undefined) {
      payload.page = payload.page ? payload.page : 0
      payload.size = payload.size ? payload.size : 10
      payload.sort = payload.sort ? payload.sort : "createAt"
  
      return this.httpClient.get<Page<Color>>(this.url,
        {
          params: new HttpParams().set('page', payload.page.toString())
  
            .set('size', payload.size.toString()).set('sort', payload.sort)
        }
  
      )
    }
   
  }
}
