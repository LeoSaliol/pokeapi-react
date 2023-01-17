import { Outlet } from "react-router-dom";
import "../sass/index.scss";
const LayoutPublic = () => {
    return (
        <>
            <nav>Nav</nav>
            <h1>
                <Outlet />
            </h1>
            <footer>Footer</footer>
        </>
    );
};

export default LayoutPublic;
