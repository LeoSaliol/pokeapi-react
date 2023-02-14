import "../../sass/single.scss";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export const SinglePokemon = () => {
    const { pokemon } = useLoaderData();
    return (
        <>
            <article className="d-flex gap-5 flex-wrap justify-content-center">
                <div className="single-poke">
                    <div className="single-poke_nav">
                        {/* //? Pokemon NAME */}
                        <h3 className="single-poke_name"> {pokemon.name} </h3>
                        {/* //? Pokemon TYPE */}
                        <div className={`single-poke_type `}>
                            {pokemon.types.map((i) => (
                                <Link
                                    key={i.slot}
                                    className={`single-poke_type-text ${i.type.name}`}
                                    to={`/type/${i.type.name}`}
                                >
                                    {i.type.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="single-poke_body">
                        {/* //? Pokemon IMAGEN */}
                        <img
                            src={
                                pokemon.sprites.other.dream_world.front_default
                            }
                            alt="..."
                            className="single-poke_body-img"
                        />
                        <div className="single-poke_details">
                            {/* //? Pokemon HABILIDADES */}
                            <div className="single-poke_details-abilitys">
                                <h4>Habilidades</h4>
                                {pokemon.abilities.map((a, index) => (
                                    <span key={index}>
                                        <li
                                            className={
                                                pokemon.types[0].type.name
                                            }
                                        >
                                            {a.ability.name}
                                        </li>
                                    </span>
                                ))}
                            </div>
                            {/* //? Pokemon STATS */}
                            <div className="single-poke_details-stats">
                                <div>
                                    <p>Hp</p>
                                    <span className="hp">
                                        {pokemon.stats[0].base_stat}
                                    </span>
                                </div>
                                <div>
                                    <p>Atq</p>
                                    <span className="atq">
                                        {pokemon.stats[1].base_stat}
                                    </span>
                                </div>
                                <div>
                                    <p>Def</p>
                                    <span className="def">
                                        {pokemon.stats[2].base_stat}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default SinglePokemon;

export const loaderPoke = async ({ params }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const pokemon = await res.json();
    return { pokemon };
};
