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
    this.viewPort = new ViewPort(0 , 0 , 800 , 500)

    let leagueGateMapData = MapData.leagueGate;
    this.leagueGateMap = new Map(
      leagueGateMapData.tileArray,
      leagueGateMapData.numberOfColumns,
      leagueGateMapData.numberOfRows,
      this.imageLoader.images.leagueGateTileSheet
    );

    this.player = new Player(
      clientWidth * 0.5 - SCALE_WIDTH * 0.5,
      clientHeight * 0.5 - SCALE_HEIGHT * 0.5,
      0,
      0,
      this.imageLoader.images.playerSpriteSheet,
      this.controller
    );

    console.log(clientWidth);

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
    this.leagueGateMap.draw(this.ctx , this.viewPort);
    this.player.updateRowAndColumn();
    this.player.draw(this.ctx);
    
    this.viewPort.updatePositions(this.player.currentColumn, this.player.currentRow);

    requestAnimationFrame(() => this.runEngine());
  }

  updateCanvasSize() {
    clientWidth = document.documentElement.clientWidth;
    clientHeight = document.documentElement.clientHeight;
    this.canvasElement.width = document.documentElement.clientWidth;
    this.canvasElement.height = document.documentElement.clientHeight;
  }
}
