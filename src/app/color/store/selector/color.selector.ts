import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ColorModuleState } from '../ColorModuleState';

export const selectColor = createFeatureSelector<ColorModuleState>("colors")

export const colorSelector = createSelector(
    selectColor,
    state => {
        const { data } = state.colors
        const { entities } = data

        data['entities'] = Object.keys(entities).map(item => entities[parseInt(item)])
        return data;
    }
)

export const colorEntitySelector = createSelector(
    selectColor,
    state => state.colors.data.content
)

