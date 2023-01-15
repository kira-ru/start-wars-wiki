import {PEOPLE, STARSHIPS, VEHICLES} from "../constants/swapiAPI";


export function typeToResource(type) {
    switch (type) {
        case 'pilots':
            return PEOPLE
        case 'residents':
            return PEOPLE
        case 'starships':
            return STARSHIPS
        case 'vehicles':
            return VEHICLES
        default:
            return undefined
    }
}