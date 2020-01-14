import { createReducer, on, Action } from "@ngrx/store";
import { Category } from 'src/app/models/Category.model';
import { getCategory, getCategorySuccess, getCategoryFailure, filterCategoryByName, filterCategoryByNameSuccess, filterCategoryByNameFailure, deleteCategory, deleteCategorySuccess, deleteCategoryFailure } from '../actions/category.action';

import { Page } from 'src/app/models/page.model';

export interface CategoryState {
    data: Page<Category>, loading: boolean, loaded: boolean
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
    on(getCategoryFailure, (state) => ({ ...state, loading: true, loaded: true })),

    on(filterCategoryByName, state => ({ ...state, loading: false, loaded: false })),
    on(filterCategoryByNameSuccess, (state, action) => ({ ...state, data: action.payload, loading: false, loaded: true })),
    on(filterCategoryByNameFailure, (state , action) => ({ ...state, data: action.payload ,loading: false, loaded: true })),

    on(deleteCategory, (state, action) => ({ ...state, loading: true, loaded: false })),
    on(deleteCategorySuccess, (state, action) => ( { ...state,loading: false, loaded: true,
         data: { ...state.data, 
        content: state.data.content.filter(
        item => item.id !== action.payload
    )  } })),
    on(deleteCategoryFailure, (state, action) => ({ ...state, loading: false, loaded: false })),
    

)



export function categorReducer(state = intitialState, action: Action) {

    return _categoryReducer(state, action)
}










