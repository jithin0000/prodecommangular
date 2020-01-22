import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ColorService } from 'src/app/services/color/color.service';
import { ColorActionTypes } from '../actions';
import { exhaustMap, catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';

@Injectable()
export class ColorEffects{

    constructor(private actions$: Actions, private colorService: ColorService)
    {}

    loadColors$ = createEffect(() => this.actions$.pipe(
        ofType(ColorActionTypes.LOAD_COLOR),
        switchMap( (body:{ payload: PageRequestDto}) => this.colorService.getPaginatedColor(body.payload).pipe(

            map(res => ({type: ColorActionTypes.LOAD_COLOR_SUCCESS, payload: res})),
            catchError(error => of({type: ColorActionTypes.LOAD_COLOR_FAILURE, payload: error}))


        ))
        )
    );
}