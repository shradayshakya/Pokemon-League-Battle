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
      clientHeight * 0.5,
    );
    setTimeout(()=>{
        this.gameWorldObject.currentState =TILE_WORLD_STATE;
        this.gameWorldObject.runEngine();
    },2000);
  }

  nextLevel(){
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);

    this.gameWorldObject.updateCurrentViewPortAndMap();

    let ctx = this.gameWorldObject.ctx;
    ctx.font = "20px Arial";
    ctx.fillText(
      "Next level is being loaded...",
      clientWidth * 0.5 - 150,
      clientHeight * 0.5,
    );
    setTimeout(()=>{
        this.gameWorldObject.currentState =TILE_WORLD_STATE;
        this.gameWorldObject.runEngine();
    },2000);
  }
}
