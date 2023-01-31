import { Link } from "react-router-dom";
import LogoPokemon from "../assets/pngegg.png";
import "../sass/logo.scss";

const Logo = () => {
    return (
        <Link to={"/"}>
            <img
                src={LogoPokemon}
                alt="Logo Pokemon"
                className="img-fluid mt-2 "
            />
        </Link>
    );
};

export default Logo;
