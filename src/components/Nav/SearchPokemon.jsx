import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../sass/search.scss";

const SearchPokemon = () => {
    const [namePoke, setNamePoke] = useState("");
    const [pokemon, setPokemon] = useState({});
    const [valid, setValid] = useState(false);
    const navigate = useNavigate();

    const navigation = (id) => {
        navigate(`/pokemon/${id} `);
    };

    const getPokemon = async (name) => {
        try {
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );
            const data = await res.json();

            setPokemon(data);
            if (data.id) {
                navigation(data.id);
            }
            setValid(false);
        } catch (error) {
            setValid(true);
        }
    };

    const getName = (e) => {
        e.preventDefault();
        getPokemon(namePoke.toLowerCase());
        setNamePoke("");
        if (valid === true) {
            e.target.reset();
        }
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
                <i className="bi bi-search" onClick={(e) => getName(e)}></i>
            </form>
            {valid && (
                <div
                    className="alert alert-danger w-25 mx-auto my-3  "
                    role="alert"
                >
                    Pokemon not found
                </div>
            )}
        </div>
    );
};

export default SearchPokemon;
