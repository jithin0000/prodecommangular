import { createAction, Action, props } from "@ngrx/store";
import { Category } from 'src/app/models/Category.model';

export enum CategoryActionTypes {
    LOAD_CATEGORY = "[LOAD] Categories",
    LOAD_CATEGORY_SUCCESS = "[LOAD] Categories success",
    LOAD_CATEGORY_FAILURE = "[LOAD] Categories failure",
}

export const getCategory = createAction( CategoryActionTypes.LOAD_CATEGORY)
export const getCategorySuccess = createAction( CategoryActionTypes.LOAD_CATEGORY_SUCCESS, 
    
    props<{payload: Category[]}>()
    )
export const getCategoryFailure = createAction( CategoryActionTypes.LOAD_CATEGORY_FAILURE)



















