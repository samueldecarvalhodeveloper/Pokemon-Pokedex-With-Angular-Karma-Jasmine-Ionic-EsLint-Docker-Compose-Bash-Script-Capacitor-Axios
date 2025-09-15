import { ComponentFixture, TestBed } from "@angular/core/testing";
import LoadingIndicator from "src/app/components/loading_indicator/loading_indicator.component";

describe("Test Component LoadingIndicator", () => {
  let fixture: ComponentFixture<LoadingIndicator>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIndicator);

    fixture.detectChanges();
  });

  it("Test If Component Renders", () => {
    expect(fixture.nativeElement.querySelector("div")).toBeTruthy();
  });
});
