import { ActionReducerMap } from '@ngrx/store';
import { ColorModuleState } from '../ColorModuleState';
import { colorReducer } from './color.reducer';

export const rootColoReducer: ActionReducerMap<ColorModuleState> = {
    colors: colorReducer
}