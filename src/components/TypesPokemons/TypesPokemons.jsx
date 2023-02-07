import "../../sass/types.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TypesPokemons = ({ changeModal }) => {
    const [types, setTypes] = useState([]);

    const getPokemons = async () => {
        const res = await fetch(
            "https://pokeapi.co/api/v2/type?limit=18&offset=0"
        );
        const data = await res.json();

        setTypes(data.results);
    };

    useEffect(() => {
        getPokemons();
    }, []);

    return (
        <>
            <section className="poke_type container-fluid">
                <i className="bi bi-x-lg" onClick={changeModal}></i>
                {types.map((t, i) => (
                    <Link
                        key={i}
                        to={`/type/${t.name}`}
                        className={`poke_type-link ${t.name}`}
                        onClick={changeModal}
                    >
                        {t.name}
                    </Link>
                ))}
            </section>
        </>
    );
};

export default TypesPokemons;
