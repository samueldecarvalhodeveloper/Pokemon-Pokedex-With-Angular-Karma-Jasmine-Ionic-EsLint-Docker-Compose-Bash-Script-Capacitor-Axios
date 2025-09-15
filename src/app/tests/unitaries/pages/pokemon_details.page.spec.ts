import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import axios from "axios";
import {
  MOCK_POKEMON_ID,
  MOCK_POKEMON_NAME,
  POKEMON_ENTITY_OBJECT,
} from "src/app/constants/pokemon_constants";
import { LOADING_INDICATOR_TEST_ID } from "src/app/constants/user_interface_constants";
import { PokemonDetailsPage } from "src/app/pages/pokemon_details_page/pokemon_details.page";

describe("Test Page PokemonDetailsPage", () => {
  let fixture: ComponentFixture<PokemonDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailsPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => MOCK_POKEMON_ID,
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsPage);

    fixture.detectChanges();
  });

  it("Test If Loading Indicator Is Shown When Pokemon Data Is Not Loaded", () => {
    spyOn(axios, "get").and.returnValue(
      Promise.resolve({ data: POKEMON_ENTITY_OBJECT }),
    );

    expect(
      fixture.nativeElement.querySelector(LOADING_INDICATOR_TEST_ID),
    ).toBeTruthy();
  });

  it("Test If Pokemon Data Is Retrieved From Service And Is Rendered", async () => {
    spyOn(axios, "get").and.returnValue(
      Promise.resolve({ data: POKEMON_ENTITY_OBJECT }),
    );

    await fixture.componentInstance.ngOnInit();

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(MOCK_POKEMON_NAME);
  });
});
