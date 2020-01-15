import * as fromRouter from '@ngrx/router-store'
import { Params, Route, RouterStateSnapshot } from '@angular/router'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'


export interface RouterStateUrl{
    url: string,
    queryParams: Params,
    params: Params
}


export interface State{
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>

}
export const getRouterState = createFeatureSelector
<fromRouter.RouterReducerState<RouterStateUrl>>
('routerReducer')


export const reducers: ActionReducerMap<State> = {
    routerReducer : fromRouter.routerReducer
}

export class CustomSerializer implements
fromRouter.RouterStateSerializer<RouterStateUrl>{
    serialize(routeState: RouterStateSnapshot): RouterStateUrl{
        const { url } =routeState
        const { queryParams } = routeState.root
        let state = routeState.root

        while(state.firstChild){
            state = state.firstChild
        }

        const { params } = state

        return {url, queryParams, params};
    }
}



















