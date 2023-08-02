import { useRef } from "react";
import { usePokemonStore } from "../zustand-store/pokemons";

const Search = () => {
  const searchRef = useRef<any>();

  const setPokemons = usePokemonStore((state: any) => state.setPokemons);
  const rawPokemons = usePokemonStore((state: any) => state.rawPokemons);
  const setSearchError = usePokemonStore((state: any) => state.setSearchError);

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
        className="px-6 py-2 border border-gray-400 rounded-md"
        ref={searchRef}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
