import PokemonRepository from "./pokemon_repository";
import httpClientImplementation from "axios";

class PokemonRepositoryFactory {
  private static instance: PokemonRepository | null = null;

  private constructor() {}

  public static getInstance(): PokemonRepository {
    if (this.instance === null) {
      this.instance = new PokemonRepository(httpClientImplementation);
    }

    return this.instance;
  }
}

export default PokemonRepositoryFactory;
