import { ComponentFixture, TestBed } from "@angular/core/testing";
import PokemonSearchingInput from "src/app/components/pokemon_searching_input/pokemon_searching_input.component";
import { MOCK_POKEMON_NAME } from "src/app/constants/pokemon_constants";
import { POKEMON_NAME_SEARCHING_INPUT_TEST_ID } from "src/app/constants/user_interface_constants";

describe("Test Component PokemonSearchingInput", () => {
  let fixture: ComponentFixture<PokemonSearchingInput>;
  let searchedValue: string;

  beforeEach(async () => {
    fixture = TestBed.createComponent(PokemonSearchingInput);

    fixture.componentInstance.value = searchedValue;

    fixture.componentInstance.change.subscribe(
      (updatedSearchingPokemonName: string) => {
        searchedValue = updatedSearchingPokemonName;
      },
    );

    fixture.detectChanges();
  });

  it("Test If Element Dispatches On Change Event", () => {
    fixture.nativeElement.querySelector(
      POKEMON_NAME_SEARCHING_INPUT_TEST_ID,
    ).value = MOCK_POKEMON_NAME;

    fixture.nativeElement
      .querySelector(POKEMON_NAME_SEARCHING_INPUT_TEST_ID)
      .dispatchEvent(new Event("input"));

    fixture.detectChanges();

    expect(searchedValue).toEqual(MOCK_POKEMON_NAME);
  });
});
