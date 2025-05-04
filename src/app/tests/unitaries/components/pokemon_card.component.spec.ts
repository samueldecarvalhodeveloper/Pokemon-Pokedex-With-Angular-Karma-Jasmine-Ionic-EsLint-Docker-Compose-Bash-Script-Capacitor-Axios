import { ComponentFixture, TestBed } from "@angular/core/testing";
import PokemonCard from "src/app/components/pokemon_card/pokemon_card.component";
import {
  MOCK_POKEMON_ID,
  MOCK_POKEMON_NAME,
  MOCK_POKEMON_TYPES,
  POKEMON_ENTITY_OBJECT,
} from "src/app/constants/pokemon_constants";
import {
  ID_DELIMITER_CHARACTER,
  POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER,
  POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER_PADDING_CHARACTER,
} from "src/app/constants/user_interface_constants";

describe("Test Component PokemonCard", () => {
  let fixture: ComponentFixture<PokemonCard>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(PokemonCard);

    fixture.componentInstance.pokemonData = POKEMON_ENTITY_OBJECT;

    fixture.detectChanges();
  });

  it("Test If Component Renders With Formatted Id", () => {
    expect(fixture.nativeElement.textContent).toContain(MOCK_POKEMON_NAME);
    expect(fixture.nativeElement.textContent).toContain(
      ID_DELIMITER_CHARACTER +
        MOCK_POKEMON_ID.toString().padStart(
          POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER,
          POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER_PADDING_CHARACTER,
        ),
    );
    expect(fixture.nativeElement.textContent).toContain(MOCK_POKEMON_TYPES[0]);
    expect(fixture.nativeElement.textContent).toContain(MOCK_POKEMON_TYPES[1]);
  });
});
