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
                            <p> </p>
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
