export function getDescription(resource, item) {
    switch (resource) {
        case 'people':
            return [
                {param: 'Height', value: item.height},
                {param: 'Mass', value: item.mass},
                {param: 'Hair color', value: item.hair_color},
                {param: 'Skin color', value: item.skin_color},
                {param: 'Eye color', value: item.eye_color},
                {param: 'Birth year', value: item.birth_year},
                {param: 'Gender', value: item.gender},
                {param: 'Homeworld', value: 'link'},
                {param: 'Species', value: 'link'},
            ]
        case 'starships':
            return [
                {param: 'Model', value: item.model},
                {param: 'Manufacturer', value: item.manufacturer},
                {param: 'Cost', value: item.cost_in_credits},
                {param: 'Length', value: item.length},
                {param: 'Crew', value: item.crew},
                {param: 'Passengers', value: item.passengers},
                {param: 'Starship class', value: item.starship_class},
            ]
        case 'vehicles':
            return [
                {param: 'Model', value: item.model},
                {param: 'Manufacturer', value: item.manufacturer},
                {param: 'Cost', value: item.cost_in_credits},
                {param: 'Length', value: item.length},
                {param: 'Crew', value: item.crew},
                {param: 'Passengers', value: item.passengers},
                {param: 'Cargo capacity', value: item.cargo_capacity},
                {param: 'Vehicle class', value: item.vehicle_class},
            ]
        case 'species':
            return [
                {param: 'Average height', value: item.average_height},
                {param: 'Average Lifespan', value: item.average_lifespan},
                {param: 'Classification', value: item.classification},
                {param: 'Designation', value: item.designation},
                {param: 'Homeworld', value: 'link'},
                {param: 'Language', value: item.language},
                {param: 'Skin colors', value: item.skin_colors},
            ]
        case 'planets':
            return [
                {param: 'Climate', value: item.climate},
                {param: 'Diameter', value: item.diameter + ' km'},
                {param: 'Gravity', value: item.gravity},
                {param: 'Orbital period', value: item.orbital_period},
                {param: 'Population', value: item.population},
                {param: 'Terrain', value: item.terrain},
            ]
        case 'films':
            return [
                {param: 'Created', value: item.created},
                {param: 'Director', value: item.director},
                {param: 'Producer', value: item.producer},
                {param: 'Edited', value: item.edited},
                {param: 'Episode', value: item.episode_id},
                {param: 'Release date', value: item.release_date},
            ]
        default:
            return null
    }
}