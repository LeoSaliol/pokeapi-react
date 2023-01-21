import "../sass/card.scss";
import { Link } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

export const CardPokemon = () => {
    const [imgPoke, setImgPoke] = useState([]);

    const { pokemons } = useLoaderData();
    const arrPokemons = pokemons.results;

    const getImgs = async () => {
        const promises = pokemons.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });
        const results = await Promise.all(promises);
        console.log(results);
        setImgPoke(results);
    };

    useEffect(() => {
        getImgs();
    }, []);

    return (
        <>
            {" "}
            <div className="d-flex gap-5 flex-wrap justify-content-center">
                {imgPoke.length > 0 ? (
                    imgPoke.map((poke) => (
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
                            <p> </p>
                            <Link
                                to={`/pokemon/${poke.id}`}
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
    const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0"
    );
    const pokemons = await res.json();

    return { pokemons };
};
