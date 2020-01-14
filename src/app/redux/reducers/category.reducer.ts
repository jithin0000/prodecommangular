import { createReducer, on } from "@ngrx/store";
import { Category } from 'src/app/models/Category.model';
import {  CategoryActions, CategoryActionTypes, getCategory, getCategorySuccess, getCategoryFailure } from '../actions/category.action';
import { state } from '@angular/animations';

export interface CategoryState{
    data: Category[], loading: boolean, loaded: boolean
}



export const intitialState: CategoryState= { data:[], loaded: false, loading: false }



const _categoryReducer =  createReducer(intitialState, 
        
    on(getCategory, state=>({...state, loading: true, loaded: false})),
    on(getCategorySuccess, (state, action) => ({...state, data: action.payload, loading: false, loaded: true})),
    on(getCategoryFailure, (state) => ({...state, loading: false, loaded: true}))
    
    )



export function categorReducer(state = intitialState, action: CategoryActions){

    return _categoryReducer(state, action)
}










