import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryForm: FormGroup

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {

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

  }


}
