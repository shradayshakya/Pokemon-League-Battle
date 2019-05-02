class Map {
  constructor(tileMapArray, numberOfColumns, numberOfRows, tileSheet, viewPort) {
    this.tileWidth = 16;
    this.tileHeight = 16;

    this.tileScaleWidth = SCALE_WIDTH;
    this.tileScaleHeight = SCALE_HEIGHT;

    this.numberOfColumns = numberOfColumns;
    this.numberOfRows = numberOfRows;

    this.tileMapArray = tileMapArray;
    this.tileSheet = tileSheet; //image

    this.viewPort = viewPort;
  }

  draw(ctx, leftMostVisibleColumn, topMostVisibleRow, rigthMostVisibleColumn, bottomMostVisibleRow) {

    for (let y = topMostVisibleRow; y < bottomMostVisibleRow; y++) {
      for (let x = leftMostVisibleColumn; x < rigthMostVisibleColumn; x++) {
        let value = this.tileMapArray[y * this.numberOfColumns + x];
        let imageXPosition = Math.floor(x * this.tileScaleWidth - this.viewPort.xPosition + clientWidth * 0.5 - this.viewPort.width * 0.5 );
        let imageYPosition = Math.floor(y * this.tileScaleHeight - this.viewPort.yPosition + clientHeight * 0.5 - this.viewPort.height * 0.5);
        ctx.drawImage(
          this.tileSheet,
          value * this.tileWidth,
          0,
          this.tileWidth,
          this.tileHeight,
          imageXPosition,
          imageYPosition,  
          this.tileScaleWidth,
          this.tileScaleHeight
        );
      }
    }
  }
}
