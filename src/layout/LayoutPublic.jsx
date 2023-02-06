import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

import SearchPokemon from "../components/SearchPokemon";

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
