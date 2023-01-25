import { CardPokemon } from "../components/CardPokemon";
import SearchPokemon from "../components/SearchPokemon";
import TypesPagesPokemons from "./TypesPagesPokemons";

const Home = () => {
    return (
        <>
            <div className="container">
                <SearchPokemon />
            </div>

            <TypesPagesPokemons />

            <div className="container ">
                <CardPokemon />
            </div>
        </>
    );
};

export default Home;
