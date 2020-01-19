import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ProductModuleState} from '../../product/store/ProductModuleState';
import {productDetailSelector} from '../../product/store/selectors';
import {Observable, of, combineLatest, merge, forkJoin} from 'rxjs';
import {Product} from '../../models/Product.model';
import {map, mergeMap, take} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import { addToCart } from 'src/app/cart/store/action';
import { Cart } from 'src/app/models/dto/Cart';
import { cartSelector } from 'src/app/cart/store/selectors';

@Component({
  selector: 'app-home-product-details',
  templateUrl: './home-product-details.component.html',
  styleUrls: ['./home-product-details.component.scss']
})
export class HomeProductDetailsComponent implements OnInit {

  product$: Observable<Product>;
  cart$: Observable<Cart>
  isProductIncart: boolean

  constructor(private store: Store<ProductModuleState>,
              
              private route: ActivatedRoute) { }

  ngOnInit() {


    this.product$ = this.store.select(productDetailSelector).pipe(
      take(1),
      mergeMap(item => {
        if (item === undefined) {
          return this.route.data.pipe(
            map((data: { product: Product}) => data.product)
          );
        }
        return of(item);
      })
    );

    this.cart$ = this.store.select(cartSelector)

    combineLatest(
      this.product$,
      this.cart$,
    )
    .subscribe(([product, category])=>{
      
      let isIncart = false;
     category.products.forEach(item =>{
       if(item.id === product.id){
         isIncart = true;
         return;
       }
     })

     this.isProductIncart = isIncart;

    })

    


  }

  addToCart(productId){
    this.store.dispatch(addToCart({payload: productId}))
  }

}
