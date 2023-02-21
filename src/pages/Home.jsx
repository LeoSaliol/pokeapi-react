import CardsListPokemon from "../components/CardsPokemon/CardsListPokemon";
import ButtonsTypesPokemons from "../components/TypesPokemons/ButtonsTypesPokemons";
import { AnimatePresence } from "framer-motion";

const Home = () => {
    return (
        <>
            <ButtonsTypesPokemons />
            <AnimatePresence>
                <div className="container ">
                    <CardsListPokemon />
                </div>
            </AnimatePresence>
        </>
    );
};

export default Home;
