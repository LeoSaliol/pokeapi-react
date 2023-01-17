import "../sass/card.scss";
import { Link } from "react-router-dom";

export const CardPokemon = () => {
    return (
        <div className="d-flex gap-5 flex-wrap justify-content-center">
            <div className="card-poke">
                <h3 className="card-poke_title">Ditto</h3>
                <p className="card-poke_number">#1</p>
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                    className="img-fluid card-poke_img"
                    alt="..."
                />

                <Link to="/pokemon" className="card-poke_button">
                    Fire
                </Link>
            </div>
        </div>
    );
};
