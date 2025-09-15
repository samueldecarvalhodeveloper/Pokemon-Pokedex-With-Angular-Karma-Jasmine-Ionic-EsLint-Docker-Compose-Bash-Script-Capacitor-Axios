import { ComponentFixture, TestBed } from "@angular/core/testing";
import PokemonBanner from "src/app/components/pokemon_banner/pokemon_banner.component";

describe("Test Component PokemonBanner", () => {
  let fixture: ComponentFixture<PokemonBanner>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonBanner);

    fixture.detectChanges();
  });

  it("Test If Component Renders", () => {
    expect(fixture.nativeElement.querySelector("section")).toBeTruthy();
  });
});
