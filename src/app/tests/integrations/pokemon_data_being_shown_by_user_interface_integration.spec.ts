/* eslint-disable prefer-const */

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import axios from "axios";
import {
  MOCK_POKEMON_ID,
  MOCK_POKEMON_NAME,
  POKEMON_ENTITY_OBJECT,
} from "src/app/constants/pokemon_constants";
import { PokemonDetailsPage } from "src/app/pages/pokemon_details_page/pokemon_details.page";

describe("Pokemon Data Being Shown By User Interface Integration", () => {
  it("Test Pokemon Data Being Shown", async () => {
    let fixture: ComponentFixture<PokemonDetailsPage>;

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

    spyOn(axios, "get").and.returnValue(
      Promise.resolve({ data: POKEMON_ENTITY_OBJECT }),
    );

    await fixture.componentInstance.ngOnInit();

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(MOCK_POKEMON_NAME);
  });
});
