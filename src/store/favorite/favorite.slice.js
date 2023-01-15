import {createSlice} from "@reduxjs/toolkit";
import {getLocalStorage} from "../../utils/localStorage";


const persistedState = getLocalStorage('favorite') ||
    {
        people: {},
        films: {},
        starships: {},
        vehicles: {},
        species: {},
        planets: {}
    }

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: persistedState,
    reducers: {
        addToFavorite(state, action) {
            const item = action.payload
            const resource = item.resource

            state[resource][item.id] = item
        },

        removeFromFavorite(state, action) {
            const id = action.payload.id
            const resource = action.payload.resource

            delete state[resource][id]
        }
    }
})


export default favoriteSlice.reducer
export const {addToFavorite, removeFromFavorite} = favoriteSlice.actions