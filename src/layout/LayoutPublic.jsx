import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

import "../sass/index.scss";
const LayoutPublic = () => {
    return (
        <>
            <div className="container text-center">
                <Logo />
            </div>
            <section className="container">
                <Outlet />
            </section>
            <Footer />
        </>
    );
};

export default LayoutPublic;
