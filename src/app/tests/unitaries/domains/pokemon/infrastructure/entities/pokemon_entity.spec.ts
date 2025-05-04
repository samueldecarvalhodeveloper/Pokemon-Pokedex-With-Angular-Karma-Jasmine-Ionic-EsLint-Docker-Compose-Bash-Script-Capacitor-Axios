import PokemonEntity from "../../../../../../domains/pokemon/infrastructure/entities/pokemon_entity";
import {
  MOCK_POKEMON_ID,
  MOCK_POKEMON_IMAGE,
  MOCK_POKEMON_NAME,
  MOCK_POKEMON_TYPES,
} from "../../../../../../constants/pokemon_constants";

describe("Test Class PokemonEntity", () => {
  it("Test If Entity Describes How Pokemon Entity Should Look On System", () => {
    const instance = new PokemonEntity(
      MOCK_POKEMON_ID,
      MOCK_POKEMON_NAME,
      MOCK_POKEMON_IMAGE,
      MOCK_POKEMON_TYPES,
    );

    expect(instance.id).toEqual(MOCK_POKEMON_ID);
    expect(instance.name).toEqual(MOCK_POKEMON_NAME);
    expect(instance.image).toEqual(MOCK_POKEMON_IMAGE);
    expect(instance.types).toEqual(MOCK_POKEMON_TYPES);
  });
});
