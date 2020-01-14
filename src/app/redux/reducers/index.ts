import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../AppState';
import { categorReducer } from './category.reducer';

export const rootReducer: ActionReducerMap<AppState>= {
    category: categorReducer
}