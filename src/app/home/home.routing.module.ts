import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomeProductDetailsComponent} from './home-product-details/home-product-details.component';
import {ProductResolverService} from '../product/services/resolve/product-resolver.service';


const routes: Routes = [
  {
    path: '', children: [
      {path: '', component: HomeComponent},
      {path: 'detail/:id', component: HomeProductDetailsComponent , resolve:{
        product: ProductResolverService
        } }

    ]
  },
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
