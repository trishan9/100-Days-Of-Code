import { create } from "zustand";

export const usePokemonStore = create((set) => ({
  pokemons: "",
  rawPokemons: "",
  searchError: "",

  setPokemons: (pokemons:any) => set(() => ({ pokemons: pokemons })),
  setRawPokemons: (rawPokemons:any) => set(() => ({ rawPokemons: rawPokemons })),
  setSearchError: (searchError:any) => set(() => ({ searchError: searchError })),
}));
