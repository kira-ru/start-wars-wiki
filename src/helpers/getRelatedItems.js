import {getResourceAndId} from "./getResourceAndId";

/**
 *
 * @param itemsUrlList - список из url у обьекта вызова (например, на фильмы где участвовал персонаж)
 * на связанных с ним сущностей (resource)
 * @param fetchWithBQ
 * @returns {Promise<{data: Awaited<unknown>[]}|{error: string}>}
 * [ {name: }
 */
export async function getRelatedItems(itemsUrlList, fetchWithBQ) {
    const itemsIdAndResource = itemsUrlList.map((item) => getResourceAndId(item))

    const itemsData = await Promise.all(itemsIdAndResource.map(async ({id, resource}) => {
        const response = await fetchWithBQ(`${resource}/${id}`)
        return response.data
    }))

    return itemsData ? {data: itemsData} : {error: 'fetching error'}
}