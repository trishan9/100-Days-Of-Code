import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePokemonStore } from "../zustand-store/pokemons";

const apiUrl = import.meta.env.VITE_API_URL

const Pokemons = () => {
const pokemons = usePokemonStore((state:any) => state.pokemons)
const setPokemons = usePokemonStore((state:any) => state.setPokemons)
const setRawPokemons = usePokemonStore((state:any) => state.setRawPokemons)
const searchError = usePokemonStore((state:any) => state.searchError)

  const { data } = useQuery({
    queryKey: ["pokemonsData"],
    queryFn: async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        return result.results;
      } catch (err) {
        console.log(err);
      }
    },
  });

  useEffect(() => {
    if (data) {
      setPokemons(data);
      setRawPokemons(data);
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-6 m-6">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {pokemons.length > 0 &&
          pokemons.map((pokemon: any) => (
            <li
              key={pokemon.url}
              className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow"
            >
              <div className="flex flex-col flex-1 p-8">
                <img
                  className="flex-shrink-0 w-32 h-32 mx-auto rounded-full"
                  src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.url
                    .slice(34, 36)
                    .replace(/[^0-9]/g, "")}.svg`}
                  alt={pokemon.name}
                />

                <h3 className="mt-6 text-sm font-medium text-gray-900 capitalize">
                  {pokemon.name}
                </h3>

                <dl className="flex flex-col justify-between flex-grow mt-1">
                  <dt className="sr-only">API URL</dt>

                  <a href={pokemon.url} target="_blank">
                    <dd className="text-sm text-gray-500 hover:underline">
                      {pokemon.url}
                    </dd>
                  </a>
                </dl>
              </div>
            </li>
          ))}
        {searchError.length > 0 && (
          <p className="m-auto col-span-full">{searchError}</p>
        )}
      </ul>
    </div>
  );
};

export default Pokemons;
