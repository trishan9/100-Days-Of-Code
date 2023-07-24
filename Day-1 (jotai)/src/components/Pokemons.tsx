import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { pokemonsState, rawPokemonsState, searchErrorState } from "../states/pokemons";

const apiUrl = import.meta.env.VITE_API_URL

const Pokemons = () => {
  const [pokemons, setPokemons]: any = useAtom(pokemonsState);
  const [, setRawPokemons] = useAtom(rawPokemonsState);
  const [searchError] = useAtom<any>(searchErrorState);

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
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col p-8">
                <img
                  className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                  src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.url
                    .slice(34, 36)
                    .replace(/[^0-9]/g, "")}.svg`}
                  alt={pokemon.name}
                />

                <h3 className="mt-6 text-sm font-medium text-gray-900 capitalize">
                  {pokemon.name}
                </h3>

                <dl className="mt-1 flex flex-grow flex-col justify-between">
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
