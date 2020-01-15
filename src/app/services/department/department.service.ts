import { Injectable } from '@angular/core';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';
import { BaseService } from '../base.service';
import { Department } from 'src/app/models/Department.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Page } from 'src/app/models/page.model';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends BaseService<Department> {

  constructor(http: HttpClient) {
    super(http, "/department")
   }

  public getPaginatedDepartment(payload?: PageRequestDto) {

    if (payload !== undefined) {
      payload.page = payload.page ? payload.page : 0
      payload.size = payload.size ? payload.size : 10
      payload.sort = payload.sort ? payload.sort : "createAt"
  
      return this.httpClient.get<Page<Department>>(this.url,
        {
          params: new HttpParams().set('page', payload.page.toString())
  
            .set('size', payload.size.toString()).set('sort', payload.sort)
        }
  
      )
    }
   
  }

  public filterDepartmentByName( name: Observable<string> ){
    console.log(name)
    return name.pipe(
      debounceTime(50),
      distinctUntilChanged(),
      switchMap((v) => this.filterByName(v))
    )
  }
  filterByName(v: string): any {
   return this.httpClient.get<Page<Department>>(this.url, {
     params:new HttpParams().set('search', v)
   })
  }

}
