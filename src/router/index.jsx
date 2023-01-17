import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import SinglePokemon from "../pages/SinglePokemon";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/pokemon",
                element: <SinglePokemon />,
            },
        ],
    },
]);
