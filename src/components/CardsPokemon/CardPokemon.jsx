import "../../sass/card.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CardPokemon = ({ poke }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            exit={{ opacity: 0 }}
            className="d-flex gap-5 flex-wrap justify-content-center"
        >
            {poke.length > 0 ? (
                poke.map((pok) => (
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        key={pok.id}
                        className="motion"
                    >
                        <Link className="card-poke" to={`/pokemon/${pok.id}`}>
                            <h3 className="card-poke_title"> {pok.name} </h3>
                            <p className="card-poke_number"># {pok.id} </p>

                            <img
                                src={
                                    pok.sprites.other.dream_world.front_default
                                }
                                className="card-poke_img"
                                alt="Pokemons"
                            />

                            <button className={`card-poke_button `}>
                                {pok.types.map((i) => (
                                    <p
                                        key={i.slot}
                                        className={`card-poke_button-text ${i.type.name}`}
                                    >
                                        {" "}
                                        {i.type.name}{" "}
                                    </p>
                                ))}
                            </button>
                        </Link>
                    </motion.div>
                ))
            ) : (
                <h2>Not Pokemons</h2>
            )}
        </motion.div>
    );
};

export default CardPokemon;
