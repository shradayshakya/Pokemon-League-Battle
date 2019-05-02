class Player {
  constructor(xPosition, yPosition, currentRow, currentColumn, spriteSheet, controller) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.spriteSheet = spriteSheet;

    this.currentRow = currentRow;
    this.currentColumn = currentColumn;

    this.controller = controller;

    this.width = 64;
    this.height = 64;

    this.scaleWidth = SCALE_WIDTH;
    this.scaleHeight = SCALE_HEIGHT;
  }

  draw(ctx) {
    ctx.drawImage(
      this.spriteSheet,
      0,
      0,
      this.width,
      this.height,
      this.xPosition,
      this.yPosition,
      this.scaleWidth,
      this.scaleHeight
    );
  }

  updateRowAndColumn(){
    if(this.controller.left){
      this.currentColumn--;
    }
    else if(this.controller.right){
      this.currentColumn++;
    }
    else if(this.controller.up){
      this.currentRow--;
    }
    else if(this.controller.down){
      this.currentRow++;
    }
  }

}
