import CardsListPokemon from "../components/CardsPokemon/CardsListPokemon";
import ButtonsTypesPokemons from "../components/TypesPokemons/ButtonsTypesPokemons";

const Home = () => {
    return (
        <>
            <ButtonsTypesPokemons />

            <div className="container ">
                <CardsListPokemon />
            </div>
        </>
    );
};

export default Home;
