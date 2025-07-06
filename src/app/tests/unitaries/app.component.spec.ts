import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import AppComponent from "../../app_configuration/app_configuration.component";

describe("Test Screen App", () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  it("Test If Screen Renders", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
