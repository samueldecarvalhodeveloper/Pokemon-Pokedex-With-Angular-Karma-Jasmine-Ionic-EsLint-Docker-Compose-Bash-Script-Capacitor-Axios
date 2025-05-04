class PokemonEntity {
  public readonly id: number;
  public readonly name: string;
  public readonly image: string;
  public readonly types: Array<string>;

  constructor(id: number, name: string, image: string, types: Array<string>) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.types = types;
  }
}

export default PokemonEntity;
