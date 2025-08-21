/* eslint-disable prefer-const */

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import axios from "axios";
import {
  MATRIX_OF_POKEMON_ENTITY_OBJECT,
  MOCK_POKEMON_NAME,
} from "src/app/constants/pokemon_constants";
import {
  PAGINATION_NEXT_BUTTON_TEST_ID,
  POKEMON_NAME_SEARCHING_INPUT_TEST_ID,
} from "src/app/constants/user_interface_constants";
import HomePage from "src/app/pages/home_page/home.page";

describe("Pokemon Data Being Searched By Its Name By User Interface Integration", () => {
  it("Test Pokemon Data Being Searched By Its Name", async () => {
    let fixture: ComponentFixture<HomePage>;

    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);

    fixture.detectChanges();

    spyOn(axios, "get").and.returnValue(
      Promise.resolve({ data: MATRIX_OF_POKEMON_ENTITY_OBJECT }),
    );

    await fixture.componentInstance.ngOnInit();

    fixture.detectChanges();

    fixture.nativeElement.querySelector(
      POKEMON_NAME_SEARCHING_INPUT_TEST_ID,
    ).value = MOCK_POKEMON_NAME;

    fixture.nativeElement
      .querySelector(POKEMON_NAME_SEARCHING_INPUT_TEST_ID)
      .dispatchEvent(new Event("input"));

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(MOCK_POKEMON_NAME);

    expect(
      fixture.nativeElement.querySelector(PAGINATION_NEXT_BUTTON_TEST_ID),
    ).toBeFalsy();
  });
});
