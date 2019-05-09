class Pokemon{
  constructor(name, hitPoints, damageTaken, level, movesData, type, imageLoader){
    this.name = name;
    this.hitPoints = hitPoints;
    this.damageTaken = damageTaken;
    this.level = level;
    this.movesData = movesData;
    this.type = type;
    this.imageLoader = imageLoader;
    this.setMoves();

    this.image = this.imageLoader.images[name];
  } 

  isStrongAgainst(testingType){
    let typeData = TypeData[this.type];
    return (typeData.strengths.indexOf(testingType) != -1)?true:false;
  }

  isWeakAgainst(testingType){
    let typeData = TypeData[this.type];
    return (typeData.weaknesses.indexOf(testingType) != -1)?true:false;
  }

  setMoves(){
    this.moves = [];

    this.moves.push(MoveData[this.movesData[0]]);
    this.moves.push(MoveData[this.movesData[1]]);
    this.moves.push(MoveData[this.movesData[2]]);
    this.moves.push(MoveData[this.movesData[3]]);

  }
}