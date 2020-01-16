import { createReducer, on, Action } from "@ngrx/store";
import { Department } from 'src/app/models/Department.model';
import { getDepartment, getDepartmentSuccess, getDepartmentFailure, filterDepartmentByName, filterDepartmentByNameSuccess, filterDepartmentByNameFailure, deleteDepartment, deleteDepartmentSuccess, deleteDepartmentFailure } from '../actions/department.action';

import { Page } from 'src/app/models/page.model';

export interface DepartmentState {
    data: Page<Department>, loading: boolean, loaded: boolean
}



export const intitialState: DepartmentState = {
    data: {
        content: [], totalElements: 1, totalPages: 1, 
        last: false, first: true, size: 10, number: 10,
         numberOfElements: 10,
         entities:{}
    },
    loaded: false, loading: false
}



const _departmentReducer = createReducer(intitialState,

    on(getDepartment, state => ({ ...state, loading: true, loaded: false })),
    on(getDepartmentSuccess, (state, action) => {

        const entities = action.payload.content
        .reduce((entities:{[id: number]: Department} , department ) =>{

            return {
                ...entities, 
                [department.id]: department
            }

        },
        {})

        return{ ...state,   data: {
            content: action.payload.content,
            totalPages: action.payload.totalPages,
            totalElements: action.payload.totalElements,
            numberOfElements: action.payload.numberOfElements,
            number: action.payload.number,
            size: action.payload.size,
            entities: entities
        }, loading: false, loaded: true }}
        
        ),
    on(getDepartmentFailure, (state) => ({ ...state, loading: true, loaded: true })),

    on(filterDepartmentByName, state => ({ ...state, loading: false, loaded: false })),
    on(filterDepartmentByNameSuccess, (state, action) => ({ ...state, data: action.payload, loading: false, loaded: true })),
    on(filterDepartmentByNameFailure, (state , action) => ({ ...state, data: action.payload ,loading: false, loaded: true })),

    on(deleteDepartment, (state, action) => ({ ...state, loading: true, loaded: false })),
    on(deleteDepartmentSuccess, (state, action) => ( { ...state,loading: false, loaded: true,
         data: { ...state.data, 
        content: state.data.content.filter(
        item => item.id !== action.payload
    )  } })),
    on(deleteDepartmentFailure, (state, action) => ({ ...state, loading: false, loaded: false })),
    

)



export function departmentReducer(state = intitialState, action: Action) {

    return _departmentReducer(state, action)
}










