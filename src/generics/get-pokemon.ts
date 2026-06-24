import axios from "axios";
import type { Pokemon } from "./interfaces";

const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const { data } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
  );
  return data;
};

getPokemon(1)
  .then(pokemon => console.log(pokemon.name))
  .catch(error => console.log(error))
  .finally(() => console.log("Finalizo"));
