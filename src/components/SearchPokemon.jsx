import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../sass/search.scss";

const SearchPokemon = () => {
    const [namePoke, setNamePoke] = useState("");
    const [pokemon, setPokemon] = useState({});
    const navigate = useNavigate();

    const navigation = (id) => {
        navigate(`/pokemon/${id} `);
    };

    const getPokemon = async (name) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();

        setPokemon(data);
        if (data.id) {
            navigation(data.id);
        }
    };

    const getName = (e) => {
        e.preventDefault();
        getPokemon(namePoke.toLowerCase());
        e.target.reset();
        setNamePoke("");
    };
    return (
        <div>
            <form
                onSubmit={(e) => getName(e)}
                className="d-flex justify-content-center mt-4 ms-4 align-items-center "
            >
                <input
                    type="text"
                    placeholder="Find Pokemon"
                    onChange={(e) => setNamePoke(e.target.value)}
                />
                <i className="bi bi-search"></i>
            </form>
        </div>
    );
};

export default SearchPokemon;
