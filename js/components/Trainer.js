class Trainer {
    constructor(pokemonIdentifier, battleImage, imageLoader){
        this.pokemonIdentifier = pokemonIdentifier;
        this.battleImage = battleImage;
        this.imageLoader = imageLoader;
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