import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NOT_FOUND_PAGE_INFORMATION_TEXT } from "src/app/constants/user_interface_constants";
import NotFoundPage from "src/app/pages/not_found_page/not_found.page";

describe("Test Page NotFoundPage", () => {
  let fixture: ComponentFixture<NotFoundPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPage);

    fixture.detectChanges();
  });

  it("Test If Page Renders", () => {
    expect(fixture.nativeElement.textContent).toContain(
      NOT_FOUND_PAGE_INFORMATION_TEXT,
    );
  });
});
