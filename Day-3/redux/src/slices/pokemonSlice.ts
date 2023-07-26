import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: "",
  rawPokemons: "",
  searchError: "",
};

export const pokemonSlice = createSlice({
  name: "pokemonsSlice",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setRawPokemons: (state, action) => {
      state.rawPokemons = action.payload;
    },
    setSearchError: (state, action) => {
      state.searchError = action.payload;
    }
  },
});

export const {setPokemons, setRawPokemons, setSearchError} = pokemonSlice.actions
export default pokemonSlice.reducer