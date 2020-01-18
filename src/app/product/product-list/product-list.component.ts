import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModuleState } from '../store/ProductModuleState';
import { productSelector, loadingProductSelector } from '../store/selectors';
import { loadPorducts, deleteProduct } from '../store/actions';
import { Observable } from 'rxjs';
import { Page } from 'src/app/models/page.model';
import { Product } from 'src/app/models/Product.model';
import { PageEvent } from '@angular/material/paginator';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Page<Product>>;
  loading$ :Observable<boolean>

  constructor(private store: Store<ProductModuleState>) { }

  ngOnInit() {

    this.store.dispatch(loadPorducts({payload:{}}))

    this.products$ = this.store.select(productSelector)
    this.loading$ = this.store.select(loadingProductSelector)
  }

  changePage(pageEvent: PageEvent){

    let body: PageRequestDto = {
      page: pageEvent.pageIndex,
      size: pageEvent.pageSize,
      sort: "createAt"
    }

    this.store.dispatch(loadPorducts({ payload: body }))
  }


  delete(prodId){
    console.log(prodId)
    this.store.dispatch(deleteProduct({payload: prodId}))
  }

}
