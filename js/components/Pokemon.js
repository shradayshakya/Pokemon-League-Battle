class Pokemon{
  constructor(name, hitPoints, attack, defence, level, moves, type){
    this.name = name;
    this.hitPoints = hitPoints;
    this.attack = attack;
    this.defence = defence;
    this.level = level;
    this.moves = moves;
    this.type = type;
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