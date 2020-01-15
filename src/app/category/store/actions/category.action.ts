    import { createAction, Action, props } from "@ngrx/store";
    import { Category } from 'src/app/models/Category.model';
    import { Page } from 'src/app/models/page.model';
    import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';
    import { Subject } from 'rxjs';

    export enum CategoryActionTypes {
        LOAD_CATEGORY = "[LOAD] Categories",
        LOAD_CATEGORY_SUCCESS = "[LOAD] Categories success",
        LOAD_CATEGORY_FAILURE = "[LOAD] Categories failure",

        LOAD_DEPARTMENTS_OF_CATEGORY = "[LOAD] Departments Categories",
        LOAD_DEPARTMENTS_OF_CATEGORY_SUCCESS = "[LOAD]  Categories success",
        LOAD_DEPARTMENTS_OF_CATEGORY_FAILURE = "[LOAD] Categories failure",

        FILTER_CATEGORY_BY_NAME = "[FILTER]  filter Categories",
        FILTER_CATEGORY_BY_NAME_SUCCESS = "[FILTER] filter Categories success",
        FILTER_CATEGORY_BY_NAME_FAILURE = "[FILTER] filter Categories failure",

        DELETE_CATEGORY = "[DELETE]  DELETE Categories",
        DELETE_CATEGORY_SUCCESS = "[DELETE] DELETE Categories success",
        DELETE_CATEGORY_FAILURE = "[DELETE] DELETE Categories failure",
    }

    export const getCategory = createAction(
        CategoryActionTypes.LOAD_CATEGORY,
        props<{ payload?: PageRequestDto }>()

    )


    export const getCategorySuccess = createAction(
        CategoryActionTypes.LOAD_CATEGORY_SUCCESS,
        props<{ payload: Page<Category> }>()
    )
    export const getCategoryFailure = createAction(CategoryActionTypes.LOAD_CATEGORY_FAILURE)

    export const filterCategoryByName = createAction(
        CategoryActionTypes.FILTER_CATEGORY_BY_NAME,
        props<{ payload: any }>()
    )


    export const filterCategoryByNameSuccess = createAction(
        CategoryActionTypes.FILTER_CATEGORY_BY_NAME_SUCCESS,
        props<{ payload: Page<Category> }>()
    )
    export const filterCategoryByNameFailure = createAction(CategoryActionTypes.FILTER_CATEGORY_BY_NAME_FAILURE,
        props<{ payload: any }>()
    )

    export const deleteCategory = createAction(
        CategoryActionTypes.DELETE_CATEGORY,
        props<{payload: number}>());
    export const deleteCategorySuccess = createAction(
        CategoryActionTypes.DELETE_CATEGORY_SUCCESS, 
        props<{payload: number}>());
    export const deleteCategoryFailure = createAction(CategoryActionTypes.DELETE_CATEGORY_FAILURE, props<{payload:any}>());
























