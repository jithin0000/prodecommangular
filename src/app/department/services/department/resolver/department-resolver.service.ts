import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Department } from 'src/app/models/Department.model';
import { DepartmentService } from 'src/app/services/department/department.service';
import { take, mergeMap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentResolverService implements Resolve<Department> {
 

  constructor(
    private router:Router,
    private departmentService: DepartmentService
  ) { }


  resolve(route: import("@angular/router").ActivatedRouteSnapshot, 
  state: import("@angular/router").RouterStateSnapshot): Department |
   import("rxjs").Observable<Department> | Promise<Department> {
    
    let id = route.paramMap.get('id')

    return this.departmentService.getById(parseInt(id))
    .pipe(
      take(1),
      mergeMap((cat)=>{
        if(cat){
          return of(cat);
        }else{
          this.router.navigate(['/department'])
          return EMPTY;
        }
      })
    )

  }
}
