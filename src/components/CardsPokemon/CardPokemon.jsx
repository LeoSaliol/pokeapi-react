import "../../sass/card.scss";

import { Link } from "react-router-dom";

const CardPokemon = ({ poke }) => {
    return (
        <div className="d-flex gap-5 flex-wrap justify-content-center">
            {poke.length > 0 ? (
                poke.map((pok) => (
                    <Link
                        key={pok.id}
                        className="card-poke"
                        to={`/pokemon/${pok.id}`}
                    >
                        <h3 className="card-poke_title"> {pok.name} </h3>
                        <p className="card-poke_number"># {pok.id} </p>

                        <img
                            src={pok.sprites.other.dream_world.front_default}
                            className="card-poke_img"
                            alt="Pokemons"
                        />

                        <button className={`card-poke_button `}>
                            {pok.types.map((i) => (
                                <p
                                    key={i.slot}
                                    className={`card-poke_button-text ${i.type.name}`}
                                >
                                    {" "}
                                    {i.type.name}{" "}
                                </p>
                            ))}
                        </button>
                    </Link>
                ))
            ) : (
                <h2>Not Pokemons</h2>
            )}
        </div>
    );
};

export default CardPokemon;
