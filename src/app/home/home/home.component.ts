import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModuleState } from 'src/app/product/store/ProductModuleState';
import { map } from 'rxjs/operators';
import { productSelector, loadingProductSelector } from 'src/app/product/store/selectors';
import { Observable } from 'rxjs';
import { Page } from 'src/app/models/page.model';
import { Product } from 'src/app/models/Product.model';
import { selectCategories, getCategory } from 'src/app/category/store';
import { Category } from 'src/app/models/Category.model';
import { Department } from 'src/app/models/Department.model';
import { departmentSelector, getDepartment } from 'src/app/department/store';
import {filterProduct, loadPorducts} from 'src/app/product/store/actions';
import { MatSelectionList } from '@angular/material/list';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$: Observable<Page<Product>>;
  categories$: Observable<Page<Category>>;
  departments$: Observable<Page<Department>>;
  productLoading$: Observable<boolean>;

  constructor(
    private store: Store<ProductModuleState>
  ) { }

  ngOnInit() {

    this.store.dispatch(loadPorducts({payload: {}}));
    this.store.dispatch(getCategory({payload: {}}));
    this.store.dispatch(getDepartment({payload: {}}));

    this.products$ = this.store.select(productSelector);

    this.productLoading$ = this.store.select(loadingProductSelector);
    this.categories$ = this.store.select(selectCategories);
    this.departments$ = this.store.select(departmentSelector);

    this.products$.subscribe(res => console.log(res));
    this.productLoading$.subscribe(res => console.log(res))
  }

  selectCategory(selectedCategory) {

    this.store.dispatch(filterProduct({
      payload: {
        categories: selectedCategory
      }
    }));
  }

  changePage(event: PageEvent) {

    this.store.dispatch(filterProduct({
      payload: {
        pageSize: event.pageSize, page: event.pageIndex
      }
    }));
  }
}
