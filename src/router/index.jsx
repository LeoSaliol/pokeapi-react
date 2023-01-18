import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import SinglePokemon, { loaderPoke } from "../pages/SinglePokemon";
import { loaderPokemons } from "../components/CardPokemon";

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
                element: <SinglePokemon />,
                loader: loaderPoke,
            },
        ],
    },
]);
