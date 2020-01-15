import { createReducer, on, Action } from "@ngrx/store";
import { Category } from 'src/app/models/Category.model';
import { getCategory, getCategorySuccess, getCategoryFailure, filterCategoryByName, filterCategoryByNameSuccess, filterCategoryByNameFailure, deleteCategory, deleteCategorySuccess, deleteCategoryFailure, createCategory, createCategorySuccess, createCategoryFailure } from '../actions/category.action';

import { Page } from 'src/app/models/page.model';

export interface CategoryState {
    data: Page<Category>, loading: boolean, loaded: boolean,error: false, added: false,errormessage: ""
}



export const intitialState: CategoryState = {
    data: {
        entities: {},
        content: [], totalElements: 1, totalPages: 1,
        last: false, first: true, size: 10, number: 10,
        numberOfElements: 10
    },
    loaded: false, loading: false, error: false, added: false, errormessage: ""
}



const _categoryReducer = createReducer(intitialState,

    on(getCategory, state => ({ ...state, loading: true, loaded: false })),

    on(getCategorySuccess, (state, action) => {

        const data = action.payload.content.reduce((enitites: { [id: number]: Category }, category: Category) => {

            return {
                ...enitites,
                [category.id]: category
            }
        },

            {
                // ...state.data.entities
            })

        return {
            ...state,
            data: {
                content: action.payload.content,
                totalPages: action.payload.totalPages,
                totalElements: action.payload.totalElements,
                numberOfElements: action.payload.numberOfElements,
                number: action.payload.number,
                size: action.payload.size,
                entities: data
            },
            loading: false, loaded: true
        }

    }
    ),


    on(getCategoryFailure, (state) => ({ ...state, loading: true, loaded: true })),



    on(filterCategoryByName, state => ({ ...state, loading: false, loaded: false })),
    on(filterCategoryByNameSuccess, (state, action) => {
        const data = action.payload.content.reduce((enitites: { [id: number]: Category }, category: Category) => {

            return {
                ...enitites,
                [category.id]: category
            }
        },

            {
            })

        return { ...state,
            data: {
                content: action.payload.content,
                totalPages: action.payload.totalPages,
                totalElements: action.payload.totalElements,
                numberOfElements: action.payload.numberOfElements,
                number: action.payload.number,
                size: action.payload.size,
                entities: data
            },
              loading: false, loaded: true }

    }),


    on(filterCategoryByNameFailure, (state, action) => ({ ...state, data: action.payload, loading: false, loaded: true })),

    on(deleteCategory, (state, action) => ({ ...state, loading: true, loaded: false })),
    on(deleteCategorySuccess, (state, action) => { 
        
        const enties = Object.keys(state.data.entities)
        .map( id => state.data.entities[parseInt(id)])

        return {
        
        ...state, loading: false, loaded: true,
        data: {
            ...state.data,
            entities:enties.filter(
                item => item.id !== action.payload
            )
        }
    }}
    ),
    on(deleteCategoryFailure, (state, action) => { 
        console.log(action)
        return { ...state, loading: false, loaded: false }
    }),

    on(createCategory, (state, action)=> ({ ...state,error:false, added: false, loading: true, loaded: false})),
    on(createCategorySuccess, (state, action)=> 
    {
        
        return  { ...state, loading: false, error:false, added: true, loaded: false, data: {
            ...state.data, entities: {...state.data.entities, 
                [action.payload.id]: action.payload} ,
        } }
    }
    ,
    ),
    on(createCategoryFailure, (state, action)=> ({ ...state, loading:false, loaded: false, 
    error: true, added: false, errormessage: action.payload
    }))


)



export function categorReducer(state = intitialState, action: Action) {

    return _categoryReducer(state, action)
}










