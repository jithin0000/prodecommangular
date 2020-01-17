import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Department } from 'src/app/models/Department.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  departmentSubject$ = new Subject<Department>()

  department$ = this.departmentSubject$.asObservable();

  constructor() { }

  sendDepartment(department: Department)
  {
    this.departmentSubject$.next(department)
  }
}
