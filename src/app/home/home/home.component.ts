import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModuleState } from 'src/app/product/store/ProductModuleState';
import { map, filter, debounceTime, distinct, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
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
import { BrandService } from 'src/app/services/brand/brand.service';
import { Brand } from 'src/app/models/Brand.model';
import { Color } from 'src/app/models/Color.model';
import { colorEntitySelector, colorSelector } from 'src/app/color/store/selector';
import { loadColor } from 'src/app/color/store/actions';
import { FormBuilder } from '@angular/forms';

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
  brands$: Observable<Brand[]>
  colors$: Observable<Page<Color>>



  

  constructor(
    private store: Store<ProductModuleState>,
    private brandService: BrandService,
    private formBuilder: FormBuilder
    
  ) { }

  priceRangeForm = this.formBuilder.group(
    {
      min: [0],
      max:[0]
    }
  )

  
  public get min() {
    return this.priceRangeForm.get('min')
  }
  public get max() {
    return this.priceRangeForm.get('max')
  }

  ngOnInit() {

    this.store.dispatch(loadPorducts({payload: {}}));
    this.store.dispatch(getCategory({payload: {}}));
    this.store.dispatch(getDepartment({payload: {}}));
    this.store.dispatch(loadColor({payload: {}}));

    this.products$ = this.store.select(productSelector);

    this.productLoading$ = this.store.select(loadingProductSelector);
    this.categories$ = this.store.select(selectCategories);
    this.departments$ = this.store.select(departmentSelector);
    this.colors$ = this.store.select(colorSelector)


    this.brands$ = this.brandService.getAll().pipe(
      map(items => items)
    )

    this.filterProductByPriceRange()


  }
  filterProductByPriceRange() {

    const priceFilter$ = this.priceRangeForm.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap( item => this.store.dispatch(filterProduct( { payload: { min: item.min, max: item.max } } )))
      
    )

    priceFilter$.subscribe(res => console.log(res))
    
  }

  selectCategory(selectedCategory) {

    this.store.dispatch(filterProduct({
      payload: {
        categories: [selectedCategory]
      }
    }));
  }

  filterByBrands(brands) {

    this.store.dispatch(filterProduct({
      payload: {
        brands: brands
      }
    }));
  }

  filterByColors(colors){
    console.log(colors)
    this.store.dispatch(filterProduct({payload: {
      colors: colors
    }}))
  }

  changePage(event: PageEvent) {

    this.store.dispatch(filterProduct({
      payload: {
        pageSize: event.pageSize, page: event.pageIndex
      }
    }));
  }


  
}



