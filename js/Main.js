class GameWorld {
  constructor(canvasElement) {
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext("2d");
    this.updateCanvasSize();
    this.init();
  }

  init() {
    this.imageLoader = new ImageLoader();
    this.controller = new Controller(document);

    this.gateMap = new Map(
      MapData.gateMap,
      this.imageLoader.images.gateTileSheet,
      this.imageLoader.images.garyTile
    );

    this.viewPort = new ViewPort(
      this.gateMap.mapData.initialViewportX,
      this.gateMap.mapData.initialViewportY,
      VIEWPORT_INITIAL_WIDTH,
      VIEWPORT_INITIAL_HEIGHT
    );

    this.player = new Player(
      Math.floor(clientWidth * 0.5 - SCALE_WIDTH * 0.5),
      Math.floor(clientHeight * 0.5 - SCALE_HEIGHT * 0.5),
      this.imageLoader.images.playerSpriteSheet,
      this.controller
    );

    this.start();
  }

  start() {
    var intervalId = setInterval(() => {
      if (this.imageLoader.hasAllImagesLoaded()) {
        clearInterval(intervalId);
        this.runEngine();
      }
    });
  }

  runEngine() {
    this.updateCanvasSize();

    this.gateMap.draw(this.ctx, this.viewPort);
    this.player.draw(this.ctx);

    this.player.moveViewPort(this.gateMap, this.viewPort);

    this.viewPort.drawBorder(this.ctx);

    requestAnimationFrame(() => this.runEngine());
  }

  updateCanvasSize() {
    clientWidth = document.documentElement.clientWidth;
    clientHeight = document.documentElement.clientHeight;
    this.canvasElement.width = document.documentElement.clientWidth;
    this.canvasElement.height = document.documentElement.clientHeight;
  }
}
