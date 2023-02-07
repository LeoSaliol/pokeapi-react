import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";

import CardPokemon from "../components/CardsPokemon/CardPokemon";
import TypesPokemons from "../components/TypesPokemons/TypesPokemons";

import "../sass/types.scss";
import "../sass/modal.scss";

const ListaPagePokemon = () => {
    const { types, data } = useLoaderData();
    const [classType, setClassType] = useState("");
    const [modal, setModal] = useState(false);

    const changeModal = () => {
        setModal(!modal);
    };
    const typesClass = () => {
        setClassType(data.name);
    };
    useEffect(() => {
        typesClass();
    }, [typesClass]);

    return (
        <>
            <div className="back">
                <Link className={`back_button ${classType} `} to={"/"}>
                    <i className="bi bi-arrow-left-circle"></i>
                </Link>
                <button
                    onClick={changeModal}
                    className={`back_text ${classType}`}
                >
                    {" "}
                    {classType}
                </button>
            </div>

            {modal && (
                <>
                    <span className="modal-back" onClick={changeModal}></span>
                    <TypesPokemons changeModal={changeModal} />
                </>
            )}

            <CardPokemon poke={types.slice(0, 15)} />
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
    return { types, data };
};
