import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CategoriesState } from '../store/CategoriesSate';
import { getDepartment, departmentSelector, departmentEntitySelector } from 'src/app/department/store';
import { Observable, combineLatest, merge, concat } from 'rxjs';
import { Page } from 'src/app/models/page.model';
import { Department } from 'src/app/models/Department.model';
import { createCategory } from '../store/actions/category.action';
import { selectCategories, selectCategoryFeature } from '../store';
import { map, take, tap, combineAll, takeLast, takeWhile, pluck } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/core/widget/snackbar/snackbar.component';
import { CatetegoryCommunicationService } from '../services/communication/catetegory-communication.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit, OnDestroy {

  categoryForm: FormGroup
  departments$: Observable<Page<Department>>;
  errorMessage: string = ''
  selectedDepartment: string[] = []
  update = false;
  departmentEntity$: Observable<any>;

  
  

  constructor( 
    private eventService: CatetegoryCommunicationService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder, 
    private store: Store<CategoriesState>) {

   }

  ngOnInit() {

    

    this.getDepartments();

    this.departments$ = this.store.select(departmentSelector)
    this.departmentEntity$ = this.store.select(departmentEntitySelector)

    this.departmentEntity$.subscribe(res => console.log(res))

    this.checkCategoryAddedSuccessfull();

    this.createCategoryForm();

    this.showSelectedDepartmentAsChips();

    this.eventService.category$.pipe(
      map(item => ({name: item.name, deps: item.departments.map(d => d.id)})  )
    ).subscribe(res => {
      this.update = true;
      this.department.setValue(res.deps)

    })

  
   
  }

  

  private showSelectedDepartmentAsChips() {
    combineLatest(this.department.valueChanges, this.departments$).subscribe(([selectedValue, departments]) => {
      console.log(selectedValue)
      this.selectedDepartment = this.selectedDepartment.filter(item => item !== item);
      selectedValue.forEach(element => {
        this.selectedDepartment = [...this.selectedDepartment, departments.content[element].name];
      });
    });
  }

  private createCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      department: ['', [Validators.required]]
    });
  }

  private checkCategoryAddedSuccessfull() {
    this.store.select(selectCategoryFeature)
      .subscribe(res => {
        if (res.categories.error) {
          this.errorMessage = res.categories.errormessage;
        }
        else if (res.categories.added===true) {
          this.categoryForm.reset();
          this.errorMessage = "";
          this.snackBar.openFromComponent(SnackbarComponent, {
            data: "succesffully created",
            duration: 3000
          });
        }
      });
  }

  private getDepartments() {
    this.store.dispatch(getDepartment({
    payload: {
      page: 0, size: 0, sort: ""
    }
    }));
  }

  public get name() {
    return this.categoryForm.get('name')
  }

  public get department() {
    return this.categoryForm.get('department')
  }
  
  onSubmit(){


    if (this.categoryForm.valid) {

      if (this.update) {
        
      }else{

        this.store.dispatch(createCategory({payload: this.categoryForm.value}))
      }



    }

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.eventService.categorySubject$.unsubscribe()
  }


}
