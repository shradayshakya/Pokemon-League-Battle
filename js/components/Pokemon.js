class Pokemon{
  constructor(name, hitPoints, damageTaken, attack, defence, level, moves, type, imageLoader){
    this.name = name;
    this.hitPoints = hitPoints;
    this.damageTaken = damageTaken;
    this.attack = attack;
    this.defence = defence;
    this.level = level;
    this.moves = moves;
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
    this.moves[0] = MoveData[this.moves[0]];
    this.moves[1] = MoveData[this.moves[1]];
    this.moves[2] = MoveData[this.moves[2]];
    this.moves[3] = MoveData[this.moves[3]];

  }
}