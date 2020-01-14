import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Category } from 'src/app/models/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolverService implements Resolve<Category> {
  

  constructor() { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Category | import("rxjs").Observable<Category> | Promise<Category> {
    throw new Error("Method not implemented.");
  }
}
