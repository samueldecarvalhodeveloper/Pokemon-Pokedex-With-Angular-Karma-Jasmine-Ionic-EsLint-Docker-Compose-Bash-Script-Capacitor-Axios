import {
  MATRIX_OF_POKEMON_ENTITY_OBJECT,
  MOCK_POKEMON_ID,
  MOCK_POKEMON_IMAGE,
  MOCK_POKEMON_NAME,
  MOCK_POKEMON_TYPES,
} from "../../../../constants/pokemon_constants";
import PokemonSearcher from "../../../../infrastructure/adapters/pokemon_searcher";

describe("Test Class PokemonSearcher", () => {
  it('Test If Method "getPokemons" Returns List Of Pokemons That Matches With Pattern', () => {
    const listOfPokemons = PokemonSearcher.getPokemons(
      MOCK_POKEMON_NAME,
      MATRIX_OF_POKEMON_ENTITY_OBJECT,
    );

    expect(listOfPokemons[0].id).toEqual(MOCK_POKEMON_ID);
    expect(listOfPokemons[0].name).toEqual(MOCK_POKEMON_NAME);
    expect(listOfPokemons[0].image).toEqual(MOCK_POKEMON_IMAGE);
    expect(listOfPokemons[0].types).toEqual(MOCK_POKEMON_TYPES);
  });
});
