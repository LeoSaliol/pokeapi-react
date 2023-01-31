import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import TarjetaPokemon from "../components/Tarjeta/TarjetaPokemon";
import "../sass/types.scss";

const ListaPagePokemon = () => {
    const { types } = useLoaderData();
    const [classType, setClassType] = useState("");
    const typesClass = () => {
        types.slice(0, 15).map((i) => setClassType(i.types[0].type.name));
    };
    useEffect(() => {
        typesClass();
    });

    return (
        <>
            <Link className={`back ${classType} `} to={"/"}>
                <i className="bi bi-arrow-left-circle"></i>
            </Link>

            <TarjetaPokemon poke={types.slice(0, 15)} />
        </>
    );
};

export default ListaPagePokemon;

export const loaderType = async ({ params }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${params.type}`);
    const data = await res.json();

    const promises = data.pokemon.map(async (poke) => {
        const res = await fetch(poke.pokemon.url);
        const types = await res.json();
        return types;
    });

    const types = await Promise.all(promises);
    return { types };
};
