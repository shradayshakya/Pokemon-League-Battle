class Opponent extends Trainer{
  constructor(name, battleImage, pokemonIdentifier,password, messageA, messageB, imageLoader) {
    super(pokemonIdentifier,battleImage,imageLoader);

    this.name = name;
    this.password = password;
    this.messageA = messageA;
    this.messageB = messageB;
    this.setPokemon();
  }
}


