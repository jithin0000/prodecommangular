import { createReducer, on } from "@ngrx/store";
import { Category } from 'src/app/models/Category.model';
import {  CategoryActions, CategoryActionTypes } from '../actions/category.action';
import { state } from '@angular/animations';

export interface CategoryState{
    data: Category[], loading: boolean, loaded: boolean
}


export const intitialState: CategoryState= { data:[], loaded: false, loading: false }

export function categoryReducer(state = intitialState, action: CategoryActions ) {

    switch (action.type) {
        case CategoryActionTypes.LOAD_CATEGORY:
            return { ...state, loading: true, loaded: false}    
        
        case CategoryActionTypes.LOAD_CATEGORY_SUCCESS:
            return { ...state, loading: false, loaded: true}
        
        case CategoryActionTypes.LOAD_CATEGORY_FAILURE:
            return { ...state, loading: false, loaded: false}

        default:
            return state;
    }
    
}









