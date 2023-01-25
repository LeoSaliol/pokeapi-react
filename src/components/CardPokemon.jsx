import "../sass/card.scss";
import { Link } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

export const CardPokemon = () => {
    const { pokemons } = useLoaderData();

    return (
        <>
            {" "}
            <div className="d-flex gap-5 flex-wrap justify-content-center">
                {pokemons.length > 0 ? (
                    pokemons.map((poke) => (
                        <div key={poke.id} className="card-poke">
                            <h3 className="card-poke_title"> {poke.name} </h3>
                            <p className="card-poke_number"># {poke.id} </p>

                            <img
                                src={
                                    poke.sprites.other.dream_world.front_default
                                }
                                className="card-poke_img"
                                alt="Pokemons"
                            />

                            <Link
                                to={`/pokemon/${poke.id}`}
                                className={`card-poke_button `}
                            >
                                {poke.types.map((i) => (
                                    <p
                                        key={i.slot}
                                        className={`card-poke_button-text ${i.type.name}`}
                                    >
                                        {" "}
                                        {i.type.name}{" "}
                                    </p>
                                ))}
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
    const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0"
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const pokemons = await res.json();
        return pokemons;
    });
    const pokemons = await Promise.all(promises);

    return { pokemons };
};
