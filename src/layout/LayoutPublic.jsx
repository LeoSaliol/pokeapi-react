import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import SearchPokemon from "../components/SearchPokemon";
import "../sass/index.scss";
const LayoutPublic = () => {
    return (
        <>
            <div className="container text-center">
                <Logo />
                <SearchPokemon />
            </div>
            <h1 className="container">
                <Outlet />
            </h1>
            <footer>Footer</footer>
        </>
    );
};

export default LayoutPublic;
