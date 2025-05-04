import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import LoadingIndicator from "src/app/components/loading_indicator/loading_indicator.component";
import PokemonCard from "src/app/components/pokemon_card/pokemon_card.component";
import PokemonEntity from "src/app/domains/pokemon/infrastructure/entities/pokemon_entity";
import PokemonRepositoryFactory from "src/app/domains/pokemon/pokemon_repository_factory";

@Component({
  selector: "pokemon-details-page",
  templateUrl: "./pokemon_details.page.html",
  styleUrls: ["./pokemon_details.page.scss"],
  imports: [PokemonCard, LoadingIndicator, CommonModule],
})
class PokemonDetailsPage implements OnInit {
  pokemonData!: PokemonEntity;
  isPokemonDataLoaded = false;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    const pokemonId = Number(this.route.snapshot.paramMap.get("id"));
    const pokemonRepository = PokemonRepositoryFactory.getInstance();

    this.pokemonData = await pokemonRepository.getPokemon(pokemonId);

    this.isPokemonDataLoaded = true;
  }
}

export { PokemonDetailsPage };
