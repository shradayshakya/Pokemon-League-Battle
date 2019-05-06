class Pokemon{
  constructor(pokemonData){
    this.pokemonData = pokemonData;

    this.name = pokemonData.name;
    this.hitPoints = pokemonData.hitPoints;
    this.attack = pokemonData.attack;
    this.defence = pokemonData.defence;
    this.level = pokemonData.level;
    this.moves = pokemonData.moves;
    this.type = pokemonData.type;
  
  } 

  isStrongAgainst(testingType){
    let typeData = TypeData[this.type];
    return (typeData.strengths.indexOf(testingType) != -1)?true:false;
  }

  isWeakAgainst(testingType){
    let typeData = TypeData[this.type];
    return (typeData.weaknesses.indexOf(testingType) != -1)?true:false;
  }
}