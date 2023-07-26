import { atom } from "recoil";

export const rawPokemonsState = atom({
  key: "rawPokemons",
  default: {},
});

export const pokemonsState = atom({
  key: "pokemons",
  default: {},
});

export const searchErrorState = atom({
  key: "searchError",
  default: {},
});
