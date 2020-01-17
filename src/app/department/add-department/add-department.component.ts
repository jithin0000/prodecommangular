import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DepartmentsState } from '../DepartmentsState';
import { createDepartment } from '../store/actions/department.action';
import { EventService } from '../services/department/event.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  constructor(
    private store: Store<DepartmentsState>,
    private departmentEventService: EventService,
    private formBuilder: FormBuilder) {

   }

   departmentForm = this.formBuilder.group({
     name: ['', [Validators.required]]
   })

  ngOnInit() {

    this.departmentEventService.department$.subscribe(res => this.name.setValue(res.name))

  }

  
  public get name() {
    return this.departmentForm.get('name')
  }

  onSubmit(){
    if (this.departmentForm.valid) {
      this.store.dispatch(createDepartment({payload: this.departmentForm.value}))
    }
  }
  

}
