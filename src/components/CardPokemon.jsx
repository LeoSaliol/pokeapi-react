import "../sass/card.scss";
import { Link } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

export const CardPokemon = () => {
    const { pokemons } = useLoaderData();
    const arrPokemons = pokemons.results;

    return (
        <>
            {" "}
            <div className="d-flex gap-5 flex-wrap justify-content-center">
                {arrPokemons.length > 0 ? (
                    arrPokemons.map((poke, index) => (
                        <div key={index} className="card-poke">
                            <h3 className="card-poke_title"> {poke.name} </h3>
                            <p className="card-poke_number"># {index + 1} </p>
                            <img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                                className="img-fluid card-poke_img"
                                alt="Pokemons"
                            />

                            <Link
                                to={`/pokemon/${index + 1}`}
                                className="card-poke_button"
                            >
                                Fire
                            </Link>
                        </div>
                    ))
                ) : (
                    <h2>Not Pokemons</h2>
                )}
            </div>
        </>
    );
};

export const loaderPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const pokemons = await res.json();
    return { pokemons };
};
