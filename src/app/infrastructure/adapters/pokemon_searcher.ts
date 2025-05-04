import PokemonEntity from "src/app/domains/pokemon/infrastructure/entities/pokemon_entity";

class PokemonSearcher {
  private constructor() {}

  public static getPokemons(
    pokemonName: string,
    matrixOfPokemons: Array<Array<PokemonEntity>>,
  ): Array<PokemonEntity> {
    const listOfPokemonsWithName: Array<PokemonEntity> = [];

    for (const pokemonPage of matrixOfPokemons) {
      for (const pokemon of pokemonPage) {
        if (
          pokemon.name
            .toLocaleLowerCase()
            .startsWith(pokemonName.toLocaleLowerCase())
        ) {
          listOfPokemonsWithName.push(pokemon);
        }
      }
    }

    return listOfPokemonsWithName;
  }
}

export default PokemonSearcher;
