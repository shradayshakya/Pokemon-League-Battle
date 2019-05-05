class Map {
  constructor(tileMapArray, numberOfColumns, numberOfRows, tileSheet) {
    this.tileWidth = 16;
    this.tileHeight = 16;

    this.tileScaleWidth = SCALE_WIDTH;
    this.tileScaleHeight = SCALE_HEIGHT;

    this.numberOfColumns = numberOfColumns;
    this.numberOfRows = numberOfRows;

    this.tileMapArray = tileMapArray;
    this.tileSheet = tileSheet; //image
  }

  draw(ctx, viewPort) {
    let leftMostVisibleColumn = Math.floor(viewPort.xPosition / SCALE_WIDTH);
    let topMostVisibleRow = Math.floor(viewPort.yPosition / SCALE_HEIGHT);
    let rightMostVisibleColumn = Math.ceil((viewPort.xPosition + viewPort.width) / SCALE_WIDTH );
    let bottomMostVisibleRow = Math.ceil((viewPort.yPosition + viewPort.height) / SCALE_HEIGHT );

    let centerColumn =  Math.floor((leftMostVisibleColumn + rightMostVisibleColumn) /2);
    let centerRow = Math.floor((topMostVisibleRow + bottomMostVisibleRow) /2); 

    let value =  this.tileMapArray[centerRow* this.numberOfColumns + centerColumn]

    console.log(value)

    if(leftMostVisibleColumn < 0 ) leftMostVisibleColumn = 0;
    if(topMostVisibleRow < 0 ) topMostVisibleRow = 0;
    if(rightMostVisibleColumn > this.numberOfColumns) rightMostVisibleColumn = this.numberOfColumns;
    if(bottomMostVisibleRow > this.numberOfRows) bottomMostVisibleRow = this.numberOfRows;

    for (let y = topMostVisibleRow; y < bottomMostVisibleRow; y++) {
      for (let x = leftMostVisibleColumn; x < rightMostVisibleColumn; x++) {
        let tileSheetValue = this.tileMapArray[y * this.numberOfColumns + x];
        
        let clippingX = tileSheetValue * this.tileWidth;
        let clippingY = 0;

        let imageXPositionOnCanvas = (x * this.tileScaleWidth - viewPort.xPosition + clientWidth * 0.5 - viewPort.width * 0.5);
        let imageYPositionOnCanvas = (y * this.tileScaleHeight - viewPort.yPosition + clientHeight * 0.5 - viewPort.height * 0.5);

        ctx.drawImage(
          this.tileSheet,
          clippingX,
          clippingY,
          this.tileWidth,
          this.tileHeight,
          imageXPositionOnCanvas,
          imageYPositionOnCanvas,  
          this.tileScaleWidth,
          this.tileScaleHeight
        );
      }
    }
    
  }


  getCenterValue(x , y, viewPort){
    let leftMostVisibleColumn = Math.floor(x / SCALE_WIDTH);
    let topMostVisibleRow = Math.floor(y / SCALE_HEIGHT);
    let rightMostVisibleColumn = Math.ceil((x + viewPort.width) / SCALE_WIDTH );
    let bottomMostVisibleRow = Math.ceil((y + viewPort.height) / SCALE_HEIGHT );

    let centerColumn =  Math.floor((leftMostVisibleColumn + rightMostVisibleColumn) /2);
    let centerRow = Math.floor((topMostVisibleRow + bottomMostVisibleRow) /2); 

    let value =  this.tileMapArray[centerRow* this.numberOfColumns + centerColumn]
    console.log(value)
    return value;
  }
}
