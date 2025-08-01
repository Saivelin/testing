import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { rootReducer } from './appReducer'
import { productsApi } from '../../entities/product/api/productsApi'

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([productsApi.middleware]),
    devTools: import.meta.env.VITE_API !== 'production'
})

export const makeStore = () => store

setupListeners(store.dispatch)

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
