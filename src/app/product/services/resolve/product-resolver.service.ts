import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/services/product/product.service';
import { take, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Product> {
 
  constructor(private router: Router, private productService: ProductService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Product | import("rxjs").Observable<Product> | Promise<Product> {

    let id = route.paramMap.get('id')

    if (id === undefined) {
      this.router.navigate(['/product'])
      return
    }

    return this.productService.getById(parseInt(id)).pipe(

      take(1),
      mergeMap((item) => {
        if(item){
          return of(item);
        }else{
          this.router.navigate(['/product'])
          return EMPTY
        }
      })
    )



  }

}
