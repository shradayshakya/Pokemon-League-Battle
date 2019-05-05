class GameWorld {
  constructor(canvasElement) {
    this.canvasElement = canvasElement;
    this.init();
  }

  init() {
    this.ctx = this.canvasElement.getContext("2d");
    this.updateCanvasSize();

    //Utility classes
    this.imageLoader = new ImageLoader();
    this.controller = new Controller(document);

    let gateMapData = MapData.gateMap;

    this.gateMap = new Map(
      gateMapData.tileArray,
      gateMapData.numberOfColumns,
      gateMapData.numberOfRows,
      gateMapData.secondWalkableTileValue,
      gateMapData.exitTileValue,
      this.imageLoader.images.gateTileSheet,
      this.imageLoader.images.garyTile
    );
    
    this.viewPort = new ViewPort(gateMapData.initialViewportX, gateMapData.initialViewportY, 960, 500);

    this.player = new Player(
      Math.floor(clientWidth * 0.5 - SCALE_WIDTH * 0.5),
      Math.floor(clientHeight * 0.5 - SCALE_HEIGHT * 0.5),
      this.imageLoader.images.playerSpriteSheet,
      this.controller
    );

    this.start();
  }

  start() {
    var that = this;
    var intervalId = setInterval(function() {
      if (that.imageLoader.hasAllImagesLoaded()) {
        clearInterval(intervalId);
        that.runEngine();
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
