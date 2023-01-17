import "../sass/search.scss";

const SearchPokemon = () => {
    return (
        <div className="d-flex justify-content-center mt-4 ms-4 align-items-center ">
            <input type="text" placeholder="Find Pokemon" />
            <i className="bi bi-search"></i>
        </div>
    );
};

export default SearchPokemon;
