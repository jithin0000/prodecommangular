import { createReducer, on, Action } from "@ngrx/store";
import { Category } from 'src/app/models/Category.model';
import { getCategory, getCategorySuccess, getCategoryFailure, filterCategoryByName, filterCategoryByNameSuccess, filterCategoryByNameFailure } from '../actions/category.action';

import { Page } from 'src/app/models/page.model';

export interface CategoryState {
    data: Page<Category[]>, loading: boolean, loaded: boolean
}



export const intitialState: CategoryState = {
    data: {
        content: [], totalElements: 1, totalPages: 1, 
        last: false, first: true, size: 10, nubmer: 10,
         numberOfElements: 10
    },
    loaded: false, loading: false
}



const _categoryReducer = createReducer(intitialState,

    on(getCategory, state => ({ ...state, loading: true, loaded: false })),
    on(getCategorySuccess, (state, action) => ({ ...state, data: action.payload, loading: false, loaded: true })),
    on(getCategoryFailure, (state) => ({ ...state, loading: false, loaded: true })),

    on(filterCategoryByName, state => ({ ...state, loading: false, loaded: false })),
    on(filterCategoryByNameSuccess, (state, action) => {
        console.log(action.payload)
return  { ...state, data: action.payload, loading: false, loaded: true }
    }),
    on(filterCategoryByNameFailure, (state , action) => {
        console.log(action.payload)
        return { ...state, loading: false, loaded: true }
    })
    

)



export function categorReducer(state = intitialState, action: Action) {

    return _categoryReducer(state, action)
}










