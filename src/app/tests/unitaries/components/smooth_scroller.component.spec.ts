import { ComponentFixture, TestBed } from "@angular/core/testing";
import SmoothScroller from "src/app/components/smooth_scroller/smooth_scroller.component";

describe("Test Component SmoothScroller", () => {
  let fixture: ComponentFixture<SmoothScroller>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothScroller);

    fixture.detectChanges();
  });

  it("Test If Component Renders", () => {
    expect(fixture.nativeElement.querySelector("a")).toBeTruthy();
  });
});
