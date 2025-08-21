import axios from "axios";
import { MATRIX_OF_POKEMON_ENTITY_OBJECT } from "../../../../constants/pokemon_constants";
import PokemonRepositoryFactory from "../../../../domains/pokemon/pokemon_repository_factory";

describe("Test Class PokemonRepositoryFactory", () => {
  it("Test If Entity Describes How Pokemon Entity Should Look On System", async () => {
    const instance = PokemonRepositoryFactory.getInstance();

    spyOn(axios, "get").and.returnValue(
      Promise.resolve({ data: MATRIX_OF_POKEMON_ENTITY_OBJECT }),
    );

    const retrievedFromServiceMatrixOfPokemon =
      await instance.getPokemonMatrix();

    expect(retrievedFromServiceMatrixOfPokemon).toEqual(
      MATRIX_OF_POKEMON_ENTITY_OBJECT,
    );
  });
});
