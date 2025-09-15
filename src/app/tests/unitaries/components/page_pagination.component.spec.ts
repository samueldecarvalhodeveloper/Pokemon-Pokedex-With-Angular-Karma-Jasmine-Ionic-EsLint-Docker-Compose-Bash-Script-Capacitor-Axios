import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  FIRST_PAGE,
  PAGINATED_POKEMON_MATRIX,
  PAGINATION_NEXT_BUTTON_TEST_ID,
} from "src/app/constants/user_interface_constants";
import PagePagination from "src/app/components/page_pagination/page_pagination.component";

describe("Test Component PagePagination", () => {
  let fixture: ComponentFixture<PagePagination>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(PagePagination);

    fixture.detectChanges();
  });

  it("Test If Next Button Is Shown On Page Being Smaller Than Pages Limit And Dispatches On Click Event", () => {
    let currentPage: number = FIRST_PAGE;

    fixture.componentInstance.currentPage = FIRST_PAGE;

    fixture.componentInstance.numberOfPages = PAGINATED_POKEMON_MATRIX;

    fixture.componentInstance.previousButtonClick.subscribe(() => {});

    fixture.componentInstance.nextButtonClick.subscribe(() => {
      currentPage = FIRST_PAGE + 1;
    });

    fixture.componentInstance.pagePaginationInputChange.subscribe(() => {});

    fixture.detectChanges();

    fixture.nativeElement.querySelector(PAGINATION_NEXT_BUTTON_TEST_ID).click();

    expect(currentPage).toEqual(FIRST_PAGE + 1);
  });

  it("Test If Previous Button Is Shown On Page Being Greater Than First Page And Dispatches On Click Event", () => {
    let currentPage: number = PAGINATED_POKEMON_MATRIX;

    fixture.componentInstance.currentPage = PAGINATED_POKEMON_MATRIX;

    fixture.componentInstance.numberOfPages = PAGINATED_POKEMON_MATRIX;

    fixture.componentInstance.previousButtonClick.subscribe(() => {
      currentPage = PAGINATED_POKEMON_MATRIX - 1;
    });

    fixture.componentInstance.nextButtonClick.subscribe(() => {});

    fixture.componentInstance.pagePaginationInputChange.subscribe(() => {});

    fixture.detectChanges();

    fixture.nativeElement.querySelector("button").click();

    expect(currentPage).toEqual(PAGINATED_POKEMON_MATRIX - 1);
  });

  it("Test If Page Pagination Input Dispatches On Change Event", () => {
    let currentPage: number = PAGINATED_POKEMON_MATRIX;

    fixture.componentInstance.currentPage = PAGINATED_POKEMON_MATRIX;

    fixture.componentInstance.numberOfPages = PAGINATED_POKEMON_MATRIX;

    fixture.componentInstance.previousButtonClick.subscribe(() => {});

    fixture.componentInstance.nextButtonClick.subscribe(() => {});

    fixture.componentInstance.pagePaginationInputChange.subscribe(
      (updatedCurrentPage: number) => {
        currentPage = updatedCurrentPage;
      },
    );

    fixture.detectChanges();

    fixture.nativeElement.querySelector("input").value = (
      FIRST_PAGE + 1
    ).toString();

    fixture.nativeElement
      .querySelector("input")
      .dispatchEvent(new Event("input"));

    fixture.detectChanges();

    expect(currentPage).toEqual(FIRST_PAGE + 1);
  });

  it("Test If Page Pagination Input Places First Page Value If Value Is Smaller Than First Page", () => {
    let currentPage: number = PAGINATED_POKEMON_MATRIX;

    fixture.componentInstance.currentPage = PAGINATED_POKEMON_MATRIX;

    fixture.componentInstance.numberOfPages = PAGINATED_POKEMON_MATRIX;

    fixture.componentInstance.previousButtonClick.subscribe(() => {});

    fixture.componentInstance.nextButtonClick.subscribe(() => {});

    fixture.componentInstance.pagePaginationInputChange.subscribe(
      (updatedCurrentPage: number) => {
        currentPage = updatedCurrentPage;
      },
    );

    fixture.detectChanges();

    fixture.nativeElement.querySelector("input").value = (
      FIRST_PAGE - 1
    ).toString();

    fixture.nativeElement
      .querySelector("input")
      .dispatchEvent(new Event("input"));

    fixture.detectChanges();

    expect(currentPage).toEqual(FIRST_PAGE);
  });

  it("Test If Page Pagination Input Places Last Page Value If Value Is Greater Than Last Page", () => {
    let currentPage: number = PAGINATED_POKEMON_MATRIX;

    fixture.componentInstance.currentPage = PAGINATED_POKEMON_MATRIX;

    fixture.componentInstance.numberOfPages = PAGINATED_POKEMON_MATRIX;

    fixture.componentInstance.previousButtonClick.subscribe(() => {});

    fixture.componentInstance.nextButtonClick.subscribe(() => {});

    fixture.componentInstance.pagePaginationInputChange.subscribe(
      (updatedCurrentPage: number) => {
        currentPage = updatedCurrentPage;
      },
    );

    fixture.detectChanges();

    fixture.nativeElement.querySelector("input").value = (
      PAGINATED_POKEMON_MATRIX + 1
    ).toString();

    fixture.nativeElement
      .querySelector("input")
      .dispatchEvent(new Event("input"));

    fixture.detectChanges();

    expect(currentPage).toEqual(PAGINATED_POKEMON_MATRIX);
  });
});
