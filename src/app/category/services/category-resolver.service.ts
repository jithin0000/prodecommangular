import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Category } from 'src/app/models/Category.model';
import { CategoryService } from 'src/app/category/services/category/category.service';
import { take, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolverService implements Resolve<Category> {
  

  constructor(private categoryService: CategoryService, private router: Router) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, 
  state: import("@angular/router").RouterStateSnapshot): Category | import("rxjs").Observable<Category> | Promise<Category> {

    let id = route.paramMap.get('id')

    return this.categoryService.getById(parseInt(id)).pipe(
      take(1),
      catchError(this.handleError),
      mergeMap( cat => {
        if(cat){
          return of(cat);
        }else{

          this.router.navigate(['/category'])
          return EMPTY;
        }
      })
    )
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<Category, any> {
    this.router.navigate(['/category'])

    throw new Error("no category with this id")
  }
}
