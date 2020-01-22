import { Page } from 'src/app/models/page.model';
import { Color } from 'src/app/models/Color.model';
import { createReducer, Action, on } from '@ngrx/store';
import { loadColor, loadColorSuccess, loadColorFailure } from '../actions';

export interface ColorState{
    data:Page<Color>, loading: boolean, loaded: boolean, error: string
}

export const initialState: ColorState = {
    data: {
        entities: {},
        content: [], totalElements: 1, totalPages: 1,
        last: false, first: true, size: 10, number: 10,
        numberOfElements: 10
    },
    loaded: false, loading: false,error:""
}

export const _colorReducer = createReducer(
    initialState, 
    on(loadColor, (state, action) => ({...state, loading:true, loaded: false,})),
    on(loadColorSuccess, (state, action) =>{
        const entities = action.payload.content.reduce((entities: { [id: number]: Color}, color: Color)=>{
            return {
                ...entities, 
                [color.id]: color
            }
        }, {})
        return {
            ...state, data:{
                content: action.payload.content,
                entities: entities,
                totalPages: action.payload.totalPages,
                totalElements: action.payload.totalElements,
                numberOfElements: action.payload.numberOfElements,
                number: action.payload.number,
                size: action.payload.size,

            }, loading: false, loaded: true
        }
    }),
    on(loadColorFailure, (state, action)=>({...state,error: action.payload.toString(), loading: false, loaded: false}))
)

export function colorReducer(state, action: Action){
    return _colorReducer(state, action)
}