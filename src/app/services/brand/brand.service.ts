import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';
import { Brand } from 'src/app/models/Brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends BaseService<Brand> {

  constructor(http: HttpClient) {
    super(http, "/brand")
   }
}
