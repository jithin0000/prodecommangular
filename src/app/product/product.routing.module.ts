import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductResolverService } from './services/resolve/product-resolver.service';


const routes: Routes = [
    {
        path: '', children: [
            { path: '', component: ProductComponent },
            {
                path: 'detail/:id', component: ProductDetailComponent,
                resolve:{
                    product: ProductResolverService
                }
                
            },
            { path: 'add', component: AddProductComponent },
            { path: 'item', component: ProductListComponent },
        ]
    },
    { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
