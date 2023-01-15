import appRoutes from "./appRoutes";
import Layout from "../components/Layout/Layout";
import Gallery from "../components/screens/Gallery/Gallary";
import Person from "../pages/person/Person";
import Starship from "../pages/starship/Starship";
import Vehicles from "../pages/vehicle/Vehicles";
import {PEOPLE, PLANETS, SPECIES, STARSHIPS, VEHICLES} from "../constants/swapiAPI";
import Planet from "../pages/planet/Planet";
import Species from "../pages/species/Species";
import Home from "../pages/home/Home";
import Error from "../components/UI/Error/Error";
import Film from "../pages/film/Film";
import Favorite from "../pages/favorite/Favorite";

const routesConfig = [
    {
        path: appRoutes.LAYOUT,
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
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
                element: <Favorite/>
            },

            {
                path: appRoutes.NOT_FOUND,
                element: <Error/>
            },
        ]
    },

]

export default routesConfig;
