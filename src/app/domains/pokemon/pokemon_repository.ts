import type { AxiosStatic } from "axios";
import type PokemonEntity from "./infrastructure/entities/pokemon_entity";
import { POKEMON_SERVICE_URL } from "src/app/constants/pokemon_constants";

class PokemonRepository {
  private httpClientImplementation: AxiosStatic;

  constructor(httpClientImplementation: AxiosStatic) {
    this.httpClientImplementation = httpClientImplementation;
  }

  public async getPokemonMatrix(): Promise<Array<Array<PokemonEntity>>> {
    return (await this.httpClientImplementation.get(POKEMON_SERVICE_URL)).data;
  }

  public async getPokemon(id: number): Promise<PokemonEntity> {
    return (await this.httpClientImplementation.get(POKEMON_SERVICE_URL + id))
      .data;
  }
}

export default PokemonRepository;
