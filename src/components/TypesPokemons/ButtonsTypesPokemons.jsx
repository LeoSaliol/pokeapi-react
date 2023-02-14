import { useState } from "react";
import TypesPokemons from "./TypesPokemons";
import "../../sass/modal.scss";
const ButtonsTypesPokemons = () => {
    const [modal, setModal] = useState(false);
    const changeModal = () => {
        setModal(!modal);
    };
    return (
        <div className="container text-center mt-4  ">
            <button className="btn btn-warning" onClick={changeModal}>
                TYPES
            </button>
            {modal && (
                <>
                    <span className="modal-back" onClick={changeModal}></span>
                    <TypesPokemons changeModal={changeModal} />
                </>
            )}
        </div>
    );
};

export default ButtonsTypesPokemons;
