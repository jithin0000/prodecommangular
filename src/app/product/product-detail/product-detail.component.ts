import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  product$: Observable<Product>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    
   this.product$ =  this.route.data.pipe(
      map((data:{product: Product})=> data.product)
    )

  }

}
