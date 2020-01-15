import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category.model';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AppState } from 'src/app/redux/AppState';
import { Store } from '@ngrx/store';
import { getDepartment } from 'src/app/redux/actions/department.action';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  category$: Observable<Category>;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {

    this.category$ = this.router.data.pipe(
      map((data: {category: Category})=> data.category)
    )

  
  }
    
}











