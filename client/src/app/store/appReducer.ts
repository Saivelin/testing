import { combineReducers } from 'redux'
import { productsApi } from '../../entities/product/api/productsApi'

export const rootReducer = combineReducers({
    [productsApi.reducerPath]: productsApi.reducer
})
