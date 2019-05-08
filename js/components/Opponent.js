class Opponent {
    constructor(name,battleImage, pokemonName){
        this.name = name;
        this.battleImage = battleImage;
        this.pokemonName = pokemonName;
    }

    getPokemon(){
        return PokemonData[this.pokemonName];
    }
}