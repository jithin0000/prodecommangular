import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DepartmentsState } from '../DepartmentsState';
import { departmentSelector } from '../store/selectors/department.selector';
import { getDepartment } from '../store';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  constructor(private store: Store<DepartmentsState>) { }

  ngOnInit() {

    this.store.dispatch(getDepartment({payload: {
      page:0, size: 0 , sort: ""
    }}))

    this.store.select(departmentSelector)
    .subscribe(res => console.log(res))
  }

}
