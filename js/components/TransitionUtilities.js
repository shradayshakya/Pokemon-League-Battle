class TransitionUtilities {
  constructor(viewPort, gameWorldObject) {
    this.viewPort = viewPort;
    this.gameWorldObject = gameWorldObject;
  }

  healPokemon() {
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);
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

    this.gameWorldObject.refreshViewPortAndMap();

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
}
