import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category.model';
import { Observable } from 'rxjs';
import { take, map, filter, switchMap } from 'rxjs/operators';
import { AppState } from 'src/app/store/AppState';
import { Store } from '@ngrx/store';
import { getDepartment } from 'src/app/department/store/actions/department.action';
import { CategoryState } from '../store/reducers/category.reducer';
import { getSelectedCategory } from '../store/selectors/category.selector';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  category$: Observable<Category>;

  constructor(private router: ActivatedRoute, private store: Store<CategoryState>) { }

  ngOnInit() {
    
    this.category$ = this.store.select(getSelectedCategory)

    this.category$.subscribe(res => {
      if(res === undefined){

        this.category$ = this.router.data.pipe(
          map((data:{category: Category})=> data.category)
        )
      }
    })

    this.category$.subscribe(res => console.log(res))


    
  }
    
}











