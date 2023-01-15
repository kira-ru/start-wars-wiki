/**
 *
 * @param url
 * url kind "https://swapi.dev/api/people/1/"
 * kinds of types {type: people | films | starship | vehicle | species | planets}
 * @returns type and id from url / {type: films, id: 3>}
 */

export function getResourceAndId(url) {
    const urlList = url.split('/')

    return {resource: urlList[urlList.length - 3], id: urlList[urlList.length - 2]}
}


