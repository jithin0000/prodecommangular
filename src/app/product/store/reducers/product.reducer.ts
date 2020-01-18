import { Page } from 'src/app/models/page.model';
import { Product } from 'src/app/models/Product.model';
import { createReducer, on } from '@ngrx/store';
import { loadPorducts, loadPorductsSuccessfully, loadPorductsFailed, deleteProduct, deleteProductSuccess, deleteProductFailure, createProduct, createProductSuccess, createProductFailure } from '../actions';

export interface ProductState{
    data: Page<Product>, loading: boolean, loaded: boolean, added: boolean, error: boolean, 
    error_message: string
}

export const initialState: ProductState = {
    data: {
        entities: {},
        content: [], totalElements: 1, totalPages: 1,
        last: false, first: true, size: 10, number: 10,
        numberOfElements: 10
    },
    loaded: false, loading: false, error: false, added: false, error_message: ""
}

export const _product_reducer = createReducer(
    initialState, 
    on(loadPorducts, (state, action) => ({...state , loading: true, loaded: false})),
    on(loadPorductsSuccessfully, (state, action) => { 

        const data = action.payload.content.reduce((entities:{[id: number]: Product}, product)=>{
            return {
                ...entities,
                [product.id]: product
            }
        },{}) 

        return {...state ,
            data:{
                content: action.payload.content,
                totalPages: action.payload.totalPages,
                totalElements: action.payload.totalElements,
                numberOfElements: action.payload.numberOfElements,
                number: action.payload.number,
                size: action.payload.size,
                entities: data
            } ,
            
             loading: false, loaded: true}

    }),

    on(loadPorductsFailed, (state, action)=> ({...state, loading: false, loaded: false, error_message:action.payload.toString})),

    on(deleteProduct, (state, action) => ({...state, loading: true, loaded: false})),
    on(deleteProductSuccess, (state, action) => {
        
        const enties = Object.keys(state.data.entities)
        .map( id => state.data.entities[parseInt(id)])
        
        return {...state ,data:{
                totalPages: state.data.totalPages-1,
                totalElements: state.data.totalElements-1,
                numberOfElements: state.data.numberOfElements-1,
                number: state.data.number-1,
                size: state.data.size-1,
                entities: enties.filter(item => item.id !== action.payload)
    }, loaded: true, loading: false}}),
    on(deleteProductFailure, (state, action)=> ({...state, loaded: false, loading: false,
    error:true, error_message: action.payload})),


    on(createProduct, (state, action)=>({...state, loaded:false, loading: true, added: false,})),
    on(createProductSuccess, (state, action)=>{
        return{
            ...state, data: {
                totalPages: state.data.totalPages+1,
                totalElements: state.data.totalElements+1,
                numberOfElements: state.data.numberOfElements+1,
                number: state.data.number+1,
                size: state.data.size+1,
                entities: { ...state.data.entities,[action.payload.id]: action.payload}
    } , loading:false, loaded: true, added: true
        }
    }
    ),

    on(createProductFailure, (state, action)=>({...state, loading: false, loaded: false, error: true, 
    error_message: action.payload.toString()}))

)

export function productReducer(state, action){
    return _product_reducer(state, action)
}