/* eslint-disable prefer-const */

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import axios from "axios";
import { MATRIX_OF_POKEMON_ENTITY_OBJECT } from "src/app/constants/pokemon_constants";
import {
  FIRST_PAGE,
  PAGE_SELECTOR_TEST_ID,
  PAGINATION_NEXT_BUTTON_TEST_ID,
  PAGINATION_PREVIOUS_BUTTON_TEST_ID,
} from "src/app/constants/user_interface_constants";
import HomePage from "src/app/pages/home_page/home.page";

describe("Pokemon Matrix Being Paginated By User Interface Integration", () => {
  it("Test Pokemon Matrix Being Paginated", async () => {
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

    fixture.nativeElement.querySelector(PAGINATION_NEXT_BUTTON_TEST_ID).click();

    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector(PAGINATION_NEXT_BUTTON_TEST_ID),
    ).toBeFalsy();

    fixture.nativeElement
      .querySelector(PAGINATION_PREVIOUS_BUTTON_TEST_ID)
      .click();

    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector(PAGINATION_PREVIOUS_BUTTON_TEST_ID),
    ).toBeFalsy();

    fixture.nativeElement.querySelector(PAGE_SELECTOR_TEST_ID).value =
      FIRST_PAGE + 1;

    fixture.nativeElement
      .querySelector(PAGE_SELECTOR_TEST_ID)
      .dispatchEvent(new Event("input"));

    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector(PAGINATION_NEXT_BUTTON_TEST_ID),
    ).toBeFalsy();
  });
});
