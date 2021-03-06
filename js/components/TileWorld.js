class TileWorld{
    constructor(player, pokeMap, viewPort ,gameWorldObject) {
        this.player = player;
        this.pokeMap = pokeMap;
        this.viewPort = viewPort;
        this.gameWorldObject = gameWorldObject;
    }


    draw(){
    this.pokeMap.draw(this.gameWorldObject.ctx, this.viewPort);
    
    this.player.updateDirection();

    this.player.draw(this.gameWorldObject.ctx);
    this.moveViewPort();

    this.viewPort.drawBorder(this.gameWorldObject.ctx);
    }


    moveViewPort(){
        let movedXPosition = this.viewPort.xPosition + this.player.directionX;
        let movedYPosition = this.viewPort.yPosition + this.player.directionY;
    
        let mapValue = this.pokeMap.getCenterTileValueViaXandY( movedXPosition, movedYPosition , this.viewPort);
    
        if(mapValue == 0 || mapValue == this.pokeMap.secondWalkableTileValue){
          this.viewPort.updatePosition(movedXPosition , movedYPosition);
          this.player.moveLegs();
        }
        else if(mapValue == chanseyTileValue){
          this.gameWorldObject.currentState = HEALING_STATE;
        }
        else if(mapValue == opponentTileValue && !this.gameWorldObject.hasBattleCompleted){
          this.gameWorldObject.currentState = BEFORE_BATTLE_STATE;
        }
        else if(mapValue == opponentTileValue && this.gameWorldObject.hasBattleCompleted){
          this.gameWorldObject.currentState = OPPONENT_DIALOGUE_STATE;
        }
        else if(mapValue == this.pokeMap.exitTile && !this.gameWorldObject.hasBattleCompleted){
          this.gameWorldObject.currentState = LOCKED_DIALOGUE_STATE;
        }
        else if(mapValue == this.pokeMap.exitTile && this.gameWorldObject.hasBattleCompleted){
          this.gameWorldObject.currentState = ENTERING_PASSWORD_STATE; 
        }
      }
}