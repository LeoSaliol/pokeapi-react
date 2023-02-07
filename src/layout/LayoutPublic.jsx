import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Logo from "../components/Nav/Logo";

import SearchPokemon from "../components/Nav/SearchPokemon";

import "../sass/index.scss";
const LayoutPublic = () => {
    return (
        <>
            <div className="container text-center ">
                <Logo />

                <SearchPokemon />
            </div>
            <section>
                <Outlet />
            </section>
            <Footer />
        </>
    );
};

export default LayoutPublic;
