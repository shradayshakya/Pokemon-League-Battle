class Battle {
  constructor(viewPort, imageLoader, gameWorld) {
    this.gameWorld = gameWorld;
    this.ctx = this.gameWorld.ctx;

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
  }

  draw() {
    this.drawBackground();

    this.drawDialogue("You have a challenger");
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

  drawDialogue(text) {
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
      text,
      this.TEXT_OFFSET_X + clientWidth * 0.5 - this.textBoxWidth * 0.5,
      this.TEXT_OFFSET_Y + this.backgroundHeight + this.upperPadding
    );
  }
}
