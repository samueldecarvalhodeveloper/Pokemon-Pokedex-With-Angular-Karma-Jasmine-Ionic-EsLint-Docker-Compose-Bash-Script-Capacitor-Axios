import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import AppComponent from "src/app/app_configuration/app.component";

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
