import { Routes } from "@angular/router";
import HomePage from "./app/pages/home_page/home.page";
import NotFoundPage from "./app/pages/not_found_page/not_found.page";
import {
  HOME_PAGE_ROUTE,
  POKEMON_DETAILS_PAGE_ROUTE,
} from "./app/constants/user_interface_constants";

export const routes: Routes = [
  {
    path: HOME_PAGE_ROUTE,
    component: HomePage,
  },
  {
    path: POKEMON_DETAILS_PAGE_ROUTE,
    loadComponent: () =>
      import("./app/pages/pokemon_details_page/pokemon_details.page").then(
        (m) => m.PokemonDetailsPage,
      ),
  },
  {
    path: "**",
    component: NotFoundPage,
  },
];
