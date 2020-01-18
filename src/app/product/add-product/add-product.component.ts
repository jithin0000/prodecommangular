import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductModule } from '../product.module';
import { ProductModuleState } from '../store/ProductModuleState';
import { selectDepartment, departmentSelector } from 'src/app/department/store';
import { Observable, Subject } from 'rxjs';
import { Category } from 'src/app/models/Category.model';
import { Page } from 'src/app/models/page.model';
import { selectCategories, getCategory } from 'src/app/category/store';
import { UploadService } from 'src/app/services/upload/upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Photo } from 'src/app/models/Photo.model';
import { createProduct } from '../store/actions';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  onTop = false;

  categories$: Observable<Page<Category>>

  percentage = 0
  photoList:Photo[]=[]


  constructor(private formBuilder: FormBuilder,
    private fileUploadService: UploadService,
    private store: Store<ProductModuleState>) { }

  productForm = this.formBuilder.group({
    name: ['',[Validators.required]],
    description: ['',[Validators.required]],
    price: [0,[Validators.required]],
    quantity: [0,[Validators.required]],
    category: [,[Validators.required]],
    size: ['',[]],
    color: ['',[]],
  })


  ngOnInit(
   
  ) {
    this.store.dispatch(getCategory({payload:{}}))

    this.categories$ = this.store.select(selectCategories)

  }

  handleDrop(event){
    this.onTop = event
  }

  dropZoneState(fileList: FileList){
    console.log(fileList)
    for (let i = 0; i < fileList.length; i++) {
      const element = fileList[i];
      const formData = new FormData();
      formData.append('file', element)

      this.fileUploadService.upload(formData)
      .subscribe(res => {
        if (res.type === HttpEventType.UploadProgress) {
          this.percentage = Math.round(100* res.loaded / res.total)
        }else if(res instanceof HttpResponse){
          this.photoList.push(res.body)
        }
      },
      error => console.log(error))

      
    }
  }

  onSubmit(){

    if (this.productForm.valid) {

      const body ={
        ...this.productForm.value, 
        photos: this.photoList.map(item => item.id)
      }

      this.store.dispatch(createProduct({payload: body}))
    }

  }




  
  public get name() {
    return this.productForm.get('name')
  }
  
  
  public get description() {
    return this.productForm.get('description')
  }
  
  public get price() {
    return this.productForm.get('price')
  }
  public get quantity() {
    return this.productForm.get('quantity')
  }
  public get category() {
    return this.productForm.get('category')
  }
  
  public get size() {
    return this.productForm.get('size')
  }
  
  public get color() {
    return this.productForm.get('color')
  }
  


}
