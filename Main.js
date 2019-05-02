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
    this.viewPort = new ViewPort(200 , 200 , 500 , 500)

    let leagueGateMapData = MapData.leagueGate;
    this.leagueGateMap = new Map(
      leagueGateMapData.tileArray,
      leagueGateMapData.numberOfColumns,
      leagueGateMapData.numberOfRows,
      this.imageLoader.images.leagueGateTileSheet,
      this.viewPort
    );

    this.player = new Player(
      clientWidth * 0.5 - SCALE_WIDTH * 0.5,
      clientHeight * 0.5 - SCALE_HEIGHT * 0.5,
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
    let leftMostVisibleColumn = Math.floor(this.viewPort.xPosition / SCALE_WIDTH);
    let topMostVisibleRow = Math.floor(this.viewPort.yPosition / SCALE_HEIGHT);
    let rightMostVisibleColumn = Math.ceil((this.viewPort.xPosition + this.viewPort.width) / SCALE_WIDTH );
    let bottomMostVisibleRow = Math.ceil((this.viewPort.yPosition + this.viewPort.height) / SCALE_HEIGHT );

    this.updateCanvasSize();
    this.leagueGateMap.draw(this.ctx , leftMostVisibleColumn , topMostVisibleRow , rightMostVisibleColumn , bottomMostVisibleRow);
    
    // this.ctx.strokeStyle = "black";
    // this.ctx.rect(this.width * 0.5 - this.viewPort.width * 0.5 , this.height * 0.5 - this.viewPort.height * 0.5 , this.viewPort.width , this.viewPort.height);
    // this.ctx.stroke();
    
    this.player.draw(this.ctx);
    
    this.viewPort.scrollTo(this.player.xPosition, this.player.yPosition);

    requestAnimationFrame(() => this.runEngine());
  }

  updateCanvasSize() {
    clientWidth = document.documentElement.clientWidth;
    clientHeight = document.documentElement.clientHeight;
    this.canvasElement.width = document.documentElement.clientWidth;
    this.canvasElement.height = document.documentElement.clientHeight;
  }
}
