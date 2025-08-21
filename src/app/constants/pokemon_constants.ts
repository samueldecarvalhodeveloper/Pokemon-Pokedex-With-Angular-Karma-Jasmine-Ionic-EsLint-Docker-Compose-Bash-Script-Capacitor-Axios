import PokemonEntity from "../domains/pokemon/infrastructure/entities/pokemon_entity";

export const POKEMON_SERVICE_URL = "http://10.0.2.2:3000/";

export const MOCK_POKEMON_ID = 1;

export const MOCK_POKEMON_NAME = "Bulbasaur";

export const MOCK_POKEMON_IMAGE =
  "https://raw.githubusercontent.com/samueldecarvalhodeveloper/Pokedex-API-With-Elixir-PHP-Python-Laravel-Phoenix-FastAPI-Uvicorn-Asyncio-Unittest-PHP-Unit-Docker/refs/heads/main/pokemons_data_content_delivery_network_service/static/images/1.gif";

export const MOCK_POKEMON_TYPES = ["Grass", "Poison"];

export const POKEMON_ENTITY_OBJECT = new PokemonEntity(
  MOCK_POKEMON_ID,
  MOCK_POKEMON_NAME,
  MOCK_POKEMON_IMAGE,
  MOCK_POKEMON_TYPES,
);

export const MATRIX_OF_POKEMON_ENTITY_OBJECT = [
  [
    new PokemonEntity(
      MOCK_POKEMON_ID,
      MOCK_POKEMON_NAME,
      MOCK_POKEMON_IMAGE,
      MOCK_POKEMON_TYPES,
    ),
  ],
  [
    new PokemonEntity(
      MOCK_POKEMON_ID,
      MOCK_POKEMON_NAME,
      MOCK_POKEMON_IMAGE,
      MOCK_POKEMON_TYPES,
    ),
  ],
];
