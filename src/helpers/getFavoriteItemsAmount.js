export const getFavoriteItemsAmount = (favoriteItems) => {
    return  favoriteItems.reduce((acc, currentValue) => {
        acc += Object.keys(currentValue).length
        return acc
    }, 0)
}