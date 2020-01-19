import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Product } from 'src/app/models/Product.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Page } from 'src/app/models/page.model';
import { ProductRequestDto } from 'src/app/models/dto/ProductRequestDto';
import {FilterProductRequest} from '../../models/dto/FilterProductRequest';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product> {

  constructor(http: HttpClient) {
    super(http, '/product');
   }

  public filterProducts(body: FilterProductRequest) {
    return this.httpClient.post<Page<Product>>(this.url + '/filter', body);
  }


   public createProduct(body: ProductRequestDto) {
     return this.httpClient.post<Product>(this.url + '/new', body);
   }


  public getPaginatedProduct(payload?: PageRequestDto) {

    if (payload !== undefined) {
      payload.page = payload.page ? payload.page : 0;
      payload.size = payload.size ? payload.size : 10;
      payload.sort = payload.sort ? payload.sort : 'createAt';

      return this.httpClient.get<Page<Product>>(this.url,
        {
          params: new HttpParams().set('page', payload.page.toString())

            .set('size', payload.size.toString()).set('sort', payload.sort)
        }

      );
    }

  }

  public filterProductByName( name: Observable<string> ) {
    console.log(name);
    return name.pipe(
      debounceTime(50),
      distinctUntilChanged(),
      switchMap((v) => this.filterByName(v))
    );
  }
  filterByName(v: string): any {
   return this.httpClient.get<Page<Product>>(this.url, {
     params: new HttpParams().set('search', v)
   });
  }


}
