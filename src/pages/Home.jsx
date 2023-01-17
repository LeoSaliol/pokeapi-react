import { CardPokemon } from "../components/CardPokemon";
import SearchPokemon from "../components/SearchPokemon";

const Home = () => {
    return (
        <>
            <SearchPokemon />
            <CardPokemon />
        </>
    );
};

export default Home;
