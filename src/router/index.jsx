import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import SinglePagePokemon from "../pages/SinglePagePokemon";
import { loaderPokemons } from "../components/CardPokemon";
import { loaderPoke } from "../components/SinglePokemon";
import TypesPokemons from "../components/TypesPokemons";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: loaderPokemons,
            },

            {
                path: "/pokemon/:id",
                element: <SinglePagePokemon />,
                loader: loaderPoke,
            },
        ],
    },
]);
