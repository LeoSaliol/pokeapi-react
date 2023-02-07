import { useLoaderData } from "react-router-dom";
import CardPokemon from "./CardPokemon";

export const CardsListPokemon = () => {
    const { pokemons } = useLoaderData();

    return (
        <>
            <CardPokemon poke={pokemons} />
        </>
    );
};
export default CardsListPokemon;

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
