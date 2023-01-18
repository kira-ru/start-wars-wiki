import appRoutes from "./appRoutes";
import FavoritePage from "../components/screens/FavoritePage/FavoritePage";
import Layout from "../components/Layout/Layout";
import Gallery from "../components/screens/Gallery/Gallary";
import Person from "../pages/person/Person";
import Starship from "../pages/starship/Starship";
import Vehicles from "../pages/vehicle/Vehicles";
import Planet from "../pages/planet/Planet";
import Species from "../pages/species/Species";
import Films from "../pages/films/Films";
import Error from "../components/UI/Error/Error";
import Film from "../pages/film/Film";

import {PEOPLE, PLANETS, SPECIES, STARSHIPS, VEHICLES} from "../constants/swapiAPI";

const routesConfig = [
    {
        path: appRoutes.LAYOUT,
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Films/>
            },
            {
                path: appRoutes.PEOPLE,
                element: <Gallery resource={PEOPLE}/>
            },
            {
                path: appRoutes.SINGLE_PERSON,
                element: <Person/>
            },
            {
                path: appRoutes.STARSHIPS,
                element: <Gallery resource={STARSHIPS}/>
            },
            {
                path: appRoutes.SINGLE_STARSHIPS,
                element: <Starship/>
            },
            {
                path: appRoutes.VEHICLES,
                element: <Gallery resource={VEHICLES}/>
            },
            {
                path: appRoutes.SINGLE_VEHICLES,
                element: <Vehicles/>
            },
            {
                path: appRoutes.PLANETS,
                element: <Gallery resource={PLANETS}/>
            },
            {
                path: appRoutes.SINGLE_PLANET,
                element: <Planet/>
            },
            {
                path: appRoutes.SPECIES,
                element: <Gallery resource={SPECIES}/>
            },
            {
                path: appRoutes.SINGLE_SPECIES,
                element: <Species/>
            },
            {
                path: appRoutes.SINGLE_FILM,
                element: <Film/>
            },
            {
                path: appRoutes.FAVORITE,
                element: <FavoritePage/>
            },

            {
                path: appRoutes.NOT_FOUND,
                element: <Error/>
            },
        ]
    },
]

export default routesConfig;
