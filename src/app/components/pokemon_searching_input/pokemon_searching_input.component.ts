import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "pokemon-searching-input",
  templateUrl: "./pokemon_searching_input.component.html",
  styleUrls: ["./pokemon_searching_input.component.scss"],
})
class PokemonSearchingInput {
  @Input() public value: string = "";
  @Output() public change = new EventEmitter<string>();

  public onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    this.change.emit(inputElement.value);
  }
}

export default PokemonSearchingInput;
