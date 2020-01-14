import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/Category.model';

@Component({
  selector: 'app-category-list-item',
  templateUrl: './category-list-item.component.html',
  styleUrls: ['./category-list-item.component.scss']
})
export class CategoryListItemComponent implements OnInit {


  @Input("element") element: Category;
  @Input("column") column: string;

  constructor() { }

  ngOnInit() {
  }

}
