import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DepartmentsState } from '../DepartmentsState';
import { departmentSelector } from '../store/selectors/department.selector';
import { getDepartment, filterDepartmentByName, deleteDepartment } from '../store';
import { Observable, Subject } from 'rxjs';
import { Department } from 'src/app/models/Department.model';
import { Page } from 'src/app/models/page.model';
import { PageEvent } from '@angular/material/paginator';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';
import { MatSelect } from '@angular/material/select';
import { EventService } from '../services/department/event.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  departments$: Observable<Page<Department>>;

  searchTerm$ = new Subject<string>()

  constructor(private store: Store<DepartmentsState>,
    private departmentEventService: EventService
    ) { }

  ngOnInit() {

    this.store.dispatch(getDepartment({payload: {
      page:0, size: 0 , sort: ""
    }}))

    this.departments$ = this.store.select(departmentSelector)

    this.departments$.subscribe(res => console.log(res))

    this.store.dispatch(filterDepartmentByName({payload: this.searchTerm$}))
  }


  changePage(pageEvent: PageEvent){

    let body: PageRequestDto = {
      page: pageEvent.pageIndex,
      size: pageEvent.pageSize,
      sort: "createAt"
    }

    this.store.dispatch(getDepartment({ payload: body }))

  }

  sort(sort: MatSelect){
    this.store.dispatch(getDepartment({payload:{sort: sort.value}}))
  }

  selectDepartment(department){
    this.departmentEventService.sendDepartment(department)
  }

  deleteDepartment(id){this.store.dispatch(deleteDepartment({payload: id}))}

}
