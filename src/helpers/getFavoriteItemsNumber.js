export const getFavoriteItemsNumber = (favoriteItems) => {
    return  favoriteItems.reduce((acc, currentValue) => {
        acc += Object.keys(currentValue).length
        return acc
    }, 0)
}