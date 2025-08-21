import { Component } from "@angular/core";
import PokemonLogo from "../pokemon_logo/pokemon_logo.component";
@Component({
  selector: "pokemon-banner",
  templateUrl: "pokemon_banner.component.html",
  styleUrls: ["pokemon_banner.component.scss"],
  imports: [PokemonLogo],
})
class PokemonBanner {}

export default PokemonBanner;
