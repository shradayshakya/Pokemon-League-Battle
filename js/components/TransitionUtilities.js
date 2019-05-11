class TransitionUtilities {
  constructor(viewPort, gameWorldObject) {
    this.viewPort = viewPort;
    this.gameWorldObject = gameWorldObject;

    this.textBoxWidth = this.viewPort.width * 0.6;
    this.textBoxHeight = this.viewPort.height * 0.2;
    this.TEXT_OFFSET_X = 50;
    this.TEXT_OFFSET_Y = 40;
    this.boxUpperPadding = this.viewPort.height * 0.7 + 50;
  }

  healPokemon() {
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);

    this.gameWorldObject.player.pokemon.damageTaken = 0;

    let pokeballImage = this.gameWorldObject.imageLoader.images.pokeball;
    let ctx = this.gameWorldObject.ctx;
    ctx.drawImage(
      pokeballImage,
      clientWidth * 0.5 - SCALE_WIDTH,
      clientHeight * 0.5 - SCALE_HEIGHT,
      SCALE_WIDTH * 2,
      SCALE_HEIGHT * 2
    );

    setTimeout(() => {
      this.gameWorldObject.currentState = HEALING_DIALOGUE_STATE;
      this.gameWorldObject.runEngine();
    }, 3000);
  }

  healDialogue() {
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);

    this.gameWorldObject.currentTileWorld.draw();

    this.drawDialogue(
      "Your " +
        this.gameWorldObject.playerPokemon +
        " has been fully recovered!",
      ""
    );

    setTimeout(() => {
      this.gameWorldObject.currentState = TILE_WORLD_STATE;
      this.gameWorldObject.runEngine();
    }, 3000);
  }

  lockedDialogue() {
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);

    this.gameWorldObject.currentTileWorld.draw();

    this.drawDialogue("The door is closed.", "Password required!");

    setTimeout(() => {
      this.gameWorldObject.currentState = TILE_WORLD_STATE;
      this.gameWorldObject.runEngine();
    }, 3000);
  }

  opponentDialogue() {
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);

    this.gameWorldObject.currentTileWorld.draw();

    this.drawDialogue(
      "The password is " + this.gameWorldObject.currentOpponent.password,
      ""
    );

    setTimeout(() => {
      this.gameWorldObject.currentState = TILE_WORLD_STATE;
      this.gameWorldObject.runEngine();
    }, 3000);
  }

  enteringPasswordDialogue() {
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);

    this.gameWorldObject.currentTileWorld.draw();

    this.drawDialogue("Entering password...", " ");

    setTimeout(() => {
      this.gameWorldObject.currentState = NEXT_LEVEL_STATE;
      this.gameWorldObject.runEngine();
    }, 3000);
  }

  nextLevel() {
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);

    this.gameWorldObject.setLevel();

    let ctx = this.gameWorldObject.ctx;

    this.gameWorldObject.player.draw(ctx);

    ctx.globalAlpha = 0.2;
    ctx.fillStyle = "grey";
    ctx.fillRect(
      clientWidth * 0.5 - this.viewPort.width * 0.5,
      clientHeight * 0.5 - this.viewPort.height * 0.5,
      this.viewPort.width,
      this.viewPort.height
    );
    ctx.globalAlpha = 1;
    setTimeout(() => {
      this.gameWorldObject.currentState = TILE_WORLD_STATE;
      this.gameWorldObject.runEngine();
    }, 2000);
  }

  beforeBattle() {
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);

    let ctx = this.gameWorldObject.ctx;

    this.gameWorldObject.currentTileWorld.draw();

    this.gameWorldObject.player.draw(ctx);

    ctx.lineWidth = SCALE_WIDTH * 16;
    ctx.globalAlpha = 0.6;
    ctx.strokeStyle = "black";
    ctx.strokeRect(
      clientWidth * 0.5 - this.viewPort.width * 0.5,
      clientHeight * 0.5 - this.viewPort.width * 0.5,
      this.viewPort.width,
      this.viewPort.width
    );
    ctx.globalAlpha = 1;

    setTimeout(() => {
      this.gameWorldObject.currentState = BATTLE_STATE;
      this.gameWorldObject.runEngine();
    }, 2000);
  }

  gameOver() {
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);

    let gameOverImage = this.gameWorldObject.imageLoader.images.gameOver;

    let ctx = this.gameWorldObject.ctx;
    ctx.drawImage(
      gameOverImage,
      clientWidth * 0.5 - SCALE_WIDTH * 2,
      clientHeight * 0.5 - SCALE_HEIGHT * 2,
      SCALE_WIDTH * 4,
      SCALE_HEIGHT * 4
    );

    setTimeout(() => {
      this.gameWorldObject.currentState = MENU_STATE;
      this.gameWorldObject.runEngine();
    }, 2000);
  }

  drawDialogue(text1, text2) {
    let worldDialogue = this.gameWorldObject.imageLoader.images.worldDialogue;

    let ctx = this.gameWorldObject.ctx;

    ctx.drawImage(
      worldDialogue,
      clientWidth * 0.5 - this.textBoxWidth * 0.5,
      this.boxUpperPadding,
      this.textBoxWidth,
      this.textBoxHeight
    );
    ctx.font = "20px sans-serif";
    ctx.fillStyle = "#606060";
    ctx.fillText(
      text1,
      this.TEXT_OFFSET_X + clientWidth * 0.5 - this.textBoxWidth * 0.5,
      this.TEXT_OFFSET_Y + this.boxUpperPadding
    );

    ctx.fillText(
      text2,
      this.TEXT_OFFSET_X + clientWidth * 0.5 - this.textBoxWidth * 0.5,
      this.TEXT_OFFSET_Y * 1.8 + this.boxUpperPadding
    );
  }
}
