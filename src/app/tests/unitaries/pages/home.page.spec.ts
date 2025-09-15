import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import axios from "axios";
import {
  MATRIX_OF_POKEMON_ENTITY_OBJECT,
  MOCK_POKEMON_NAME,
} from "src/app/constants/pokemon_constants";
import {
  FIRST_PAGE,
  LOADING_INDICATOR_TEST_ID,
  PAGE_SELECTOR_TEST_ID,
  PAGINATION_NEXT_BUTTON_TEST_ID,
  PAGINATION_PREVIOUS_BUTTON_TEST_ID,
  POKEMON_NAME_SEARCHING_INPUT_TEST_ID,
} from "src/app/constants/user_interface_constants";
import HomePage from "src/app/pages/home_page/home.page";

describe("Test Page HomePage", () => {
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
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
  });

  it("Test If Loading Indicator Is Shown When Pokemon Data Is Not Loaded", () => {
    spyOn(axios, "get").and.returnValue(
      Promise.resolve({ data: MATRIX_OF_POKEMON_ENTITY_OBJECT }),
    );

    expect(
      fixture.nativeElement.querySelector(LOADING_INDICATOR_TEST_ID),
    ).toBeTruthy();
  });

  it("Test If Paginated List Of Pokemons Is Showed If Pokemon Name Searching Input Is Empty", async () => {
    spyOn(axios, "get").and.returnValue(
      Promise.resolve({ data: MATRIX_OF_POKEMON_ENTITY_OBJECT }),
    );

    await fixture.componentInstance.ngOnInit();

    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector(PAGINATION_NEXT_BUTTON_TEST_ID),
    ).toBeTruthy();
  });

  it("Test If Filtered By Name List Of Pokemons Is Showed If Pokemon Name Searching Input Is With Pokemon Name", async () => {
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

  it("Test If Pagination Is Set And Updates Current Pokemon Page", async () => {
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
