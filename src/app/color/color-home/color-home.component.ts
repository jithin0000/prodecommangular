import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColorModuleState } from '../store/ColorModuleState';
import { colorSelector } from '../store/selector';
import { loadColor } from '../store/actions';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.scss']
})
export class ColorHomeComponent implements OnInit {

  constructor(private store: Store<ColorModuleState>) { }

  ngOnInit() {
    this.store.dispatch(loadColor({payload:{}}))

    this.store.select(colorSelector).subscribe(res => console.log(res))
  }

}
