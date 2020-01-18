import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  onTop = false;


  constructor() { }

  ngOnInit() {
  }

  handleDrop(event){
    this.onTop = event
  }

  dropZoneState(fileList: FileList){
    console.log(fileList)
  }

}
