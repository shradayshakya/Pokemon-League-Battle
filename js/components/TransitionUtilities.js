class TransitionUtilities {
  constructor(viewPort, gameWorldObject) {
    this.viewPort = viewPort;
    this.gameWorldObject = gameWorldObject;
  }

  healPokemon() {
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);

    let ctx = this.gameWorldObject.ctx;
    ctx.font = "20px Arial";
    ctx.fillText(
      "Your pokemon is being healed...",
      clientWidth * 0.5 - 150,
      clientHeight * 0.5
    );
    setTimeout(() => {
      this.gameWorldObject.currentState = TILE_WORLD_STATE;
      this.gameWorldObject.runEngine();
    }, 2000);
  }

  nextLevel() {
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);

    this.gameWorldObject.updateCurrentViewPortAndMap();

    let ctx = this.gameWorldObject.ctx;
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
