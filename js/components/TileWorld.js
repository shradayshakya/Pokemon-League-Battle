class TileWorld{
    constructor(player, pokeMap, viewPort , gameWorldObject) {
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
        else if(mapValue == 99){
          this.gameWorldObject.currentState = HEALING_STATE;
        }
        else if(mapValue == 98 ){
          this.gameWorldObject.currentState = BATTLE_STATE;
        }
        else if(mapValue == this.pokeMap.exitTile){
          this.gameWorldObject.currentState = NEXT_LEVEL_STATE;
        }
      }
}