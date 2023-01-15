import { configureStore} from '@reduxjs/toolkit'
import {swapiAPI} from "../service/swapiAPI";
import favoriteSlice from "./favorite/favorite.slice";
import {setLocalStorage} from "../utils/localStorage";

// const rootReducer = combineReducers({
//     counter: counterSlice
// })

export const store = configureStore({
    reducer: {
        favorite: favoriteSlice,
        [swapiAPI.reducerPath]: swapiAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swapiAPI.middleware)
})

store.subscribe(() => {
    setLocalStorage('favorite', store.getState().favorite)
})