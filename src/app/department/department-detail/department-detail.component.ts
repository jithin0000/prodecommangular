import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/department/event.service';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/models/Department.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DepartmentsState } from '../DepartmentsState';
import { selectedDepartmentSelector } from '../store';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {
  department$: Observable<Department>;

  constructor(private router: ActivatedRoute,
    private store : Store<DepartmentsState>) { }

  ngOnInit() {
    this.department$ = this.store.select(selectedDepartmentSelector)

    this.department$.subscribe(res=>{
      if (res === undefined) {
        this.department$ =   this.router.data.pipe(map((data:{department: Department})=> data.department))
      }
    })

    
  }

}
