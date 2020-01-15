import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CategoriesState } from '../store/CategoriesSate';
import { getDepartment, selectDepartment, departmentSelector } from 'src/app/department/store';
import { Observable } from 'rxjs';
import { Page } from 'src/app/models/page.model';
import { Department } from 'src/app/models/Department.model';
import { createCategory } from '../store/actions/category.action';
import { selectCategories, selectCategoryFeature } from '../store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryForm: FormGroup
  departments$: Observable<Page<Department>>;
  errorMessage: string = ''
  
  

  constructor( private formBuilder: FormBuilder, private store: Store<CategoriesState>) {

   }

  ngOnInit() {

    this.store.dispatch(getDepartment({payload: {
      page:0, size: 0 , sort: ""
    }}))

    this.departments$ = this.store.select(departmentSelector)

    this.store.select(selectCategoryFeature)
    .subscribe(res => {
      if (res.categories.error) {
        this.errorMessage = res.categories.errormessage
      }else if(res.categories.added){
        this.categoryForm.reset();
        this.errorMessage = ""
      }
    })



    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      department: ['', [Validators.required]]
    })
   
   
  }

  

  public get name() {
    return this.categoryForm.get('name')
  }

  public get department() {
    return this.categoryForm.get('department')
  }
  
  onSubmit(){

    if (this.categoryForm.valid) {
      this.store.dispatch(createCategory({payload: this.categoryForm.value}))
    }

  }


}
