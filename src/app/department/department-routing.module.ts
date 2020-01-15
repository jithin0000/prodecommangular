import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';


const routes: Routes = [
    {
        path: '', children: [
            { path: '', component: DepartmentComponent },
            {
                path: 'detail/:id', component: DepartmentDetailComponent,
            },
            { path: 'add', component: AddDepartmentComponent },
            { path: 'item', component: DepartmentListComponent },
        ]
    },
    { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentRoutingModule { }
