import { useRef } from "react";
import { pokemonsState, rawPokemonsState, searchErrorState } from "../states/pokemons";
import { useAtom } from "jotai";

const Search = () => {
  const searchRef = useRef<any>();
  const [, setPokemons] = useAtom(pokemonsState);
  const [rawPokemons] = useAtom<any>(rawPokemonsState);
  const [,setSearchError] = useAtom(searchErrorState);

  const handleChange = () => {
    const query = searchRef.current.value;

    if (query.length > 0) {
      const filteredPokemons = rawPokemons.filter((pokemon: any) => {
        return pokemon.name.startsWith(query.toLowerCase());
      });

      if (filteredPokemons.length > 0) {
        setSearchError("");
        setPokemons(filteredPokemons);
      } else {
        setPokemons({});
        setSearchError(`No any pokemons found for: ${query}`);
      }
    } else {
      setSearchError("");
      setPokemons(rawPokemons);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemons"
        className="border border-gray-400 py-2 px-6 rounded-md"
        ref={searchRef}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
