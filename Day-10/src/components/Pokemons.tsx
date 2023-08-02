import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePokemonStore } from "../zustand-store/pokemons";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const apiUrl = import.meta.env.VITE_API_URL;

const Pokemons = () => {
  const pokemons = usePokemonStore((state: any) => state.pokemons);
  const setPokemons = usePokemonStore((state: any) => state.setPokemons);
  const setRawPokemons = usePokemonStore((state: any) => state.setRawPokemons);
  const searchError = usePokemonStore((state: any) => state.searchError);

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

  const updatePokemonOrder = (startIndex: number, endIndex: number) => {
    if (startIndex === endIndex) return;
    const updatedPokemons = Array.from(pokemons);
    const [draggedPokemon] = updatedPokemons.splice(startIndex, 1);
    updatedPokemons.splice(endIndex, 0, draggedPokemon);
    setPokemons(updatedPokemons);
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    updatePokemonOrder(result.source.index, result.destination.index);
  };

  return (
    <div className="flex flex-col gap-6 m-6">
      {pokemons.length > 0 && (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="pokemons">
            {(provided: any) => (
              <ul
                role="list"
                className="pokemons"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {pokemons.map((pokemon: any, index: number) => {
                  return (
                    <Draggable
                      key={pokemon.url}
                      draggableId={pokemon.url.toString()}
                      index={index}
                    >
                      {(provided: any) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className="flex flex-col text-center bg-white divide-y divide-gray-200 rounded-lg shadow col-span-full"
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
                      )}
                    </Draggable>
                  );
                })}
                {searchError.length > 0 && (
                  <p className="m-auto col-span-full">{searchError}</p>
                )}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

export default Pokemons;
