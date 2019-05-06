class Opponent {
    constructor(opponentData){
        this.opponentData = opponentData;

        this.id = opponentData.id;
        this.name = opponentData.name;
        this.introMessage = opponentData.introMessage;
        this.exitMessage = opponentData.exitMessage;

        this.pokemon = opponentData.pokemon;
    }
}