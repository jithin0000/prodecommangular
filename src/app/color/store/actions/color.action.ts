import { createAction, props } from '@ngrx/store';
import { Color } from 'src/app/models/Color.model';
import { Page } from 'src/app/models/page.model';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';

export const enum ColorActionTypes {
    LOAD_COLOR = '[COLOR] LOAD_COLOR',
    LOAD_COLOR_SUCCESS = '[COLOR] LOAD_COLOR_SUCCESS',
    LOAD_COLOR_FAILURE = '[COLOR] LOAD_COLOR_FAILURE',
    
}

export const loadColor = createAction(ColorActionTypes.LOAD_COLOR, props<{payload: PageRequestDto}>());
export const loadColorSuccess = createAction(ColorActionTypes.LOAD_COLOR_SUCCESS, props<{payload: Page<Color>}>());
export const loadColorFailure = createAction(ColorActionTypes.LOAD_COLOR_FAILURE, props<{payload: any}>());
