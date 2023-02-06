import { CardPokemon } from "../components/CardPokemon";
import TypesPagesPokemons from "./TypesPagesPokemons";

const Home = () => {
    return (
        <>
            <TypesPagesPokemons />

            <div className="container ">
                <CardPokemon />
            </div>
        </>
    );
};

export default Home;
