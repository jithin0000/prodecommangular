import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from 'src/app/models/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CatetegoryCommunicationService {

  categorySubject$ = new Subject<Category>();

  category$ = this.categorySubject$.asObservable()


  constructor() { }

  sendCategory(category: Category){
    this.categorySubject$.next(category)
  }
}
