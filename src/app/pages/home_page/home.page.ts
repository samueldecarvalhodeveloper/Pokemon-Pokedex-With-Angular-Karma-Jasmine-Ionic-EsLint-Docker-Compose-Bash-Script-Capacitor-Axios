import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import LoadingIndicator from "src/app/components/loading_indicator/loading_indicator.component";
import PagePagination from "src/app/components/page_pagination/page_pagination.component";
import PokemonBanner from "src/app/components/pokemon_banner/pokemon_banner.component";
import PokemonCard from "src/app/components/pokemon_card/pokemon_card.component";
import PokemonSearchingInput from "src/app/components/pokemon_searching_input/pokemon_searching_input.component";
import SmoothScroller from "src/app/components/smooth_scroller/smooth_scroller.component";
import { FIRST_PAGE } from "src/app/constants/user_interface_constants";
import PokemonEntity from "src/app/domains/pokemon/infrastructure/entities/pokemon_entity";
import PokemonRepositoryFactory from "src/app/domains/pokemon/pokemon_repository_factory";
import PokemonSearcher from "src/app/infrastructure/adapters/pokemon_searcher";

@Component({
  selector: "home-page",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
  imports: [
    PokemonBanner,
    PokemonSearchingInput,
    PagePagination,
    LoadingIndicator,
    SmoothScroller,
    PokemonCard,
    CommonModule,
  ],
})
class HomePage implements OnInit {
  matrixOfPokemonData!: Array<Array<PokemonEntity>>;
  isMatrixOfPokemonDataLoaded = false;
  searchingPokemonName = "";
  currentPage = FIRST_PAGE;

  async ngOnInit(): Promise<void> {
    const pokemonRepository = PokemonRepositoryFactory.getInstance();

    this.matrixOfPokemonData = await pokemonRepository.getPokemonMatrix();

    this.isMatrixOfPokemonDataLoaded = true;
  }

  getPokemonsFilteredByName(): PokemonEntity[] {
    return PokemonSearcher.getPokemons(
      this.searchingPokemonName,
      this.matrixOfPokemonData,
    );
  }
}

export default HomePage;
