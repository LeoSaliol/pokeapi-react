import { useLoaderData, Link } from "react-router-dom";
import TarjetaPokemon from "../components/Tarjeta/TarjetaPokemon";

const ListaPagePokemon = () => {
    const { type } = useLoaderData();
    console.log(type.pokemon.slice(0, 13));
    const arrType = type.pokemon.slice(0, 13);
    return (
        <>
            {/* <TarjetaPokemon poke={type.pokemon} /> */}

            {arrType.map((pok, i) => (
                <h3 key={i}> {pok.pokemon.name} </h3>
            ))}
        </>
    );
};

export default ListaPagePokemon;

export const loaderType = async ({ params }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${params.type}`);
    const type = await res.json();
    return { type };
};
