import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons, setSearchError } from "../slices/pokemonSlice";

const Search = () => {
  const searchRef = useRef<any>();
  const rawPokemons = useSelector((state: any) => state.pokemonsSlice.rawPokemons);
  const dispatch = useDispatch();

  const handleChange = () => {
    const query = searchRef.current.value;

    if (query.length > 0) {
      const filteredPokemons = rawPokemons.filter((pokemon: any) => {
        return pokemon.name.startsWith(query.toLowerCase());
      });

      if (filteredPokemons.length > 0) {
        dispatch(setSearchError(""));
        dispatch(setPokemons(filteredPokemons));
      } else {
        dispatch(setPokemons({}));
        dispatch(setSearchError(`No any pokemons found for: ${query}`));
      }
    } else {
      dispatch(setSearchError(""));
      dispatch(setPokemons(rawPokemons));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemons"
        className="px-6 py-2 border border-gray-400 rounded-md"
        ref={searchRef}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
