import { ComponentFixture, TestBed } from "@angular/core/testing";
import PokemonLogo from "src/app/components/pokemon_logo/pokemon_logo.component";

describe("Test Component PokemonLogo", () => {
  let fixture: ComponentFixture<PokemonLogo>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonLogo);

    fixture.detectChanges();
  });

  it("Test If Component Renders", () => {
    expect(fixture.nativeElement.querySelector("svg")).toBeTruthy();
  });
});
