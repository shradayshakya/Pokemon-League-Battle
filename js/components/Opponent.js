class Opponent {
  constructor(name, battleImage, pokemonIdentifier, imageLoader) {
    this.name = name;
    this.battleImage = battleImage;
    this.pokemonIdentifier = pokemonIdentifier;
    this.imageLoader = imageLoader;
    this.setPokemon();
  }

  setPokemon() {
    let pokemonData = PokemonData[this.pokemonIdentifier];
    this.pokemon = new Pokemon(
      pokemonData.name,
      pokemonData.hitPoints,
      0,
      pokemonData.attack,
      pokemonData.defence,
      pokemonData.level,
      pokemonData.moves,
      pokemonData.type,
      this.imageLoader
    );
  }
}
