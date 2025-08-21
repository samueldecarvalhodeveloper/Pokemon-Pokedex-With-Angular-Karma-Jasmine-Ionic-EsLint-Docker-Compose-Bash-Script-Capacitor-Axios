import { Component, Input } from "@angular/core";
import {
  POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER,
  POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER_PADDING_CHARACTER,
} from "../../constants/user_interface_constants";
import PokemonEntity from "src/app/domains/pokemon/infrastructure/entities/pokemon_entity";
import { CommonModule } from "@angular/common";

@Component({
  selector: "pokemon-card",
  templateUrl: "./pokemon_card.component.html",
  styleUrls: ["./pokemon_card.component.scss"],
  imports: [CommonModule],
})
class PokemonCard {
  @Input() public pokemonData!: PokemonEntity;

  public getFormattedId(id: number): string {
    return id
      .toString()
      .padStart(
        POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER,
        POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER_PADDING_CHARACTER,
      );
  }
}

export default PokemonCard;
