class Battle {
  constructor(player, opponent, viewPort, imageLoader, gameWorld) {
    this.gameWorld = gameWorld;
    this.ctx = this.gameWorld.ctx;

    this.player = player;

    this.opponent = opponent;

    this.opponentPokemon = this.opponent.getPokemon();

    this.viewPort = viewPort;
    this.imageLoader = imageLoader;
    this.battleBackgroundImage = this.imageLoader.images.battleBackground;
    this.battleDialogueImage = this.imageLoader.images.battleDialogue;
    this.battleMovesImage = this.imageLoader.images.battleMoves;

    this.backgroundWidth = this.viewPort.width;
    this.backgroundHeight = this.viewPort.height * 0.7;

    this.textBoxWidth = this.viewPort.width;
    this.textBoxHeight = this.viewPort.height * 0.3;

    this.upperPadding = 50;

    this.TEXT_OFFSET_X = 50;
    this.TEXT_OFFSET_Y = 50;

    this.currentState = OPPONENT_INTRO_STATE;
  }

  draw() {
     switch(this.currentState){
       case OPPONENT_INTRO_STATE:
       this.drawOpponentIntro();
     }
    
  }

  drawOpponentIntro(){
    this.drawBackground();
    
    this.drawPlayer();

     this.drawOpponent();

    this.drawDialogue("Trainer " + this.opponent.name + " sent", "out " + this.opponentPokemon.name + "!");
  }

  drawBackground() {
    this.ctx.drawImage(
      this.battleBackgroundImage,
      clientWidth * 0.5 - this.backgroundWidth * 0.5,
      this.upperPadding,
      this.backgroundWidth,
      this.backgroundHeight
    );
  }

  drawDialogue(text1, text2) {
    this.ctx.drawImage(
      this.battleDialogueImage,
      clientWidth * 0.5 - this.textBoxWidth * 0.5,
      this.backgroundHeight + this.upperPadding,
      this.textBoxWidth,
      this.textBoxHeight
    );
    this.ctx.font = "15px pkmn";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      text1,
      this.TEXT_OFFSET_X + clientWidth * 0.5 - this.textBoxWidth * 0.5,
      this.TEXT_OFFSET_Y + this.backgroundHeight + this.upperPadding
    );

    this.ctx.fillText(
      text2,
      this.TEXT_OFFSET_X + clientWidth * 0.5 - this.textBoxWidth * 0.5,
      this.TEXT_OFFSET_Y * 2 + this.backgroundHeight + this.upperPadding
    );
  }
  
  drawOpponent(){
    let imageWidth = 64;
    let imageHeight = 160;
    let xPosition =  clientWidth * 0.5 + imageWidth * 3;
    let yPosition =  this.upperPadding * 2;
    this.ctx.drawImage(
      this.opponent.battleImage,
      xPosition,
      yPosition,
      imageWidth,
      imageHeight
    );
  }

  drawPlayer(){
    let imageWidth = 64;
    let imageHeight = 80;
    let xPosition =  clientWidth * 0.5 - imageWidth * 4;
    let yPosition =  this.backgroundHeight + this.upperPadding - imageHeight ;
    this.ctx.drawImage(
      this.player.battleImage,
      xPosition,
      yPosition,
      imageWidth,
      imageHeight
    );
  }
}
