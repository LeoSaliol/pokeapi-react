import { useState } from "react";
import TypesPokemons from "../components/TypesPokemons";
import "../sass/modal.scss";
const TypesPagesPokemons = () => {
    const [modal, setModal] = useState(false);
    const changeModal = () => {
        setModal(!modal);
    };
    return (
        <div className="container-fluid ">
            <button onClick={changeModal}>Tipos de Pokemones</button>
            {modal && (
                <>
                    <span className="modal-back" onClick={changeModal}></span>
                    <TypesPokemons changeModal={changeModal} />
                </>
            )}
        </div>
    );
};

export default TypesPagesPokemons;
