import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorHomeComponent } from './color-home/color-home.component';


const routes: Routes = [
    {
        path: '', children: [
            { path: '', component: ColorHomeComponent },
            
        ]
    },
    { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ColorRoutingModule { }
