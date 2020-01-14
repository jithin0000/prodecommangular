import { createAction, Action } from "@ngrx/store";

export enum CategoryActionTypes {
    LOAD_CATEGORY = "[LOAD] Categories",
    LOAD_CATEGORY_SUCCESS = "[LOAD] Categories success",
    LOAD_CATEGORY_FAILURE = "[LOAD] Categories failure",
}


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
















