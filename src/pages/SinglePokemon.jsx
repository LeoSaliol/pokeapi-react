import "../sass/single.scss";
import { Link } from "react-router-dom";
const SinglePokemon = () => {
    return (
        <>
            <article className="d-flex gap-5 flex-wrap justify-content-center">
                <div className="single-poke">
                    <div className="single-poke_nav">
                        <h3 className="single-poke_title">Ditto</h3>
                        <p className="single-poke_type">Type</p>
                    </div>
                    <div className="single-poke_body">
                        <img
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                            className="img-fluid single-poke_img"
                            alt="..."
                        />

                        <div className="single-poke_details">
                            <div className="single-poke_details-abilitys">
                                <h4>Habilidades</h4>

                                <li>habilidad</li>

                                <li>habilidad</li>
                            </div>
                            <div className="single-poke_details-stats">
                                <div>
                                    <p>Hp</p>
                                    <span>1</span>
                                </div>
                                <div>
                                    <p>Atq</p>
                                    <span>2</span>
                                </div>
                                <div>
                                    <p>Def</p>
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Link to="/" className="home">
                <i className="bi bi-house-door-fill"></i>
            </Link>
        </>
    );
};

export default SinglePokemon;
