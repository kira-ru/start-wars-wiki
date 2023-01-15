import {getResourceAndId} from "./getResourceAndId";
import {getItemImage} from "./getCharactersData";

export function transformData(item) {
    const {id, resource} = getResourceAndId(item.url)
    const image = getItemImage(id, resource)

    return {...item, id, image}
}