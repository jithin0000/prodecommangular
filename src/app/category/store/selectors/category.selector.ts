import {AppState} from '../../../redux/AppState'
import { createSelector, createFeatureSelector } from '@ngrx/store'
import { CategoryState } from '../reducers/category.reducer'
import { CategoriesState } from '../CategoriesSate'
import { getRouterState } from 'src/app/redux'
import { Category } from 'src/app/models/Category.model'



export const selectCategoryFeature = 
createFeatureSelector<CategoriesState>("categories")



export const selectCategories = createSelector(
    selectCategoryFeature,
    (state: CategoriesState) => {

        let { data } = state.categories
        const { entities } = data

        data["entities"] = Object.keys(entities)
        .map( id => entities[parseInt(id)])
        

        return state.categories.data
    }
)


export const selectCategoryEntities = createSelector(
    selectCategoryFeature,
    (state) => state.categories.data.entities
)



export const selectCategoryloading = createSelector(
    selectCategoryFeature,
    (state: CategoriesState)=> state.categories.loading
)


export const getSelectedCategory = createSelector(
    selectCategoryEntities,
    getRouterState,
    (entities, router): Category =>{
        console.log(entities)
        return router.state && entities[router.state.params.id];
    } 


)












