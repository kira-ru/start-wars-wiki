import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {SWAPI_ROOT_2} from "../constants/swapiAPI";
import {transformData} from "../helpers";
import {getRelatedItems} from "../helpers/getRelatedItems";

const baseQuery = fetchBaseQuery({
    baseUrl: SWAPI_ROOT_2,
});

const baseQueryWithTransform = async (args, api, extraOptions) => {
    try {
        const response = await baseQuery(args, api, extraOptions)
        const data = response.data

        // проверка запроса на страницу сущностей
        if (data.results) {
            const items = response.data.results
            const itemsWithAdditionalData = items.map(item => transformData(item))

            return {data: {...data, results: itemsWithAdditionalData}}
        }

        return {data: transformData(data)}
    } catch (e) {
        console.error('fetching error:', e.message)
        return {error: 'Fetching error'}
    }
}

export const swapiAPI = createApi({
    reducerPath: 'starWarsApi',
    baseQuery: baseQueryWithTransform,
    endpoints: (builder) => ({
        getResource: builder.query({
            query: ({page, resource}) => `${resource}/?page=${page}`,
        }),

        getPersonalData: builder.query({
            query: ({resource, id}) => `${resource}/${id}`,
        }),

        getRelatedItems: builder.query({
            async queryFn(itemsUrlList, _queryApi, _extraOptions, fetchWithBQ) {
                try {
                    return await getRelatedItems(itemsUrlList, fetchWithBQ)
                } catch (e) {
                    console.error(e.message)
                }
            }
        })
    })
})


export const {
    useGetPersonalDataQuery,
    useGetResourceQuery,
    useGetRelatedItemsQuery,
} = swapiAPI
