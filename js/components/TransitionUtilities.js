class TransitionUtilities {
  constructor(viewPort, gameWorldObject) {
    this.viewPort = viewPort;
    this.gameWorldObject = gameWorldObject;
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
      this.gameWorldObject.currentState = TILE_WORLD_STATE;
      this.gameWorldObject.runEngine();
    }, 2000);
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

  beforeBattle(){
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

  gameOver(){
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

    this.gameWorldObject.resetGameComponents();
    setTimeout(() => {
      this.gameWorldObject.currentState = TILE_WORLD_STATE;
      this.gameWorldObject.runEngine();
    }, 2000);
  }
}
