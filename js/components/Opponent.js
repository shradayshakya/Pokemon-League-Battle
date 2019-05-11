class Opponent {
  constructor(name, battleImage, pokemonIdentifier, messageA, messageB, imageLoader) {
    this.name = name;
    this.battleImage = battleImage;
    this.pokemonIdentifier = pokemonIdentifier;
    this.messageA = messageA;
    this.messageB = messageB;
    this.imageLoader = imageLoader;
    this.setPokemon();
  }

  setPokemon() {
    let pokemonData = PokemonData[this.pokemonIdentifier];
    this.pokemon = new Pokemon(
      pokemonData.name,
      pokemonData.hitPoints,
      0,
      pokemonData.level,
      pokemonData.moves,
      pokemonData.type,
      this.imageLoader
    );
  }
}
