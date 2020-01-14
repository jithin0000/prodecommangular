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


export class LoadCategory implements Action{
    readonly type =  CategoryActionTypes.LOAD_CATEGORY;
}


export class LoadCategorySuccess implements Action{
    readonly type =  CategoryActionTypes.LOAD_CATEGORY_SUCCESS;
}



export class LoadCategoryFailure implements Action{
    readonly type =  CategoryActionTypes.LOAD_CATEGORY_FAILURE;
}


export type CategoryActions = LoadCategory | LoadCategorySuccess | LoadCategoryFailure;
















