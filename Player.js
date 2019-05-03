class Player {
  constructor(xPosition, yPosition, offsetX, offsetY, spriteSheet, controller) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;

    this.spriteSheet = spriteSheet;

    this.offsetX = offsetX;
    this.offsetY = offsetY;

    this.controller = controller;

    this.scaleWidth = SCALE_WIDTH;
    this.scaleHeight = SCALE_HEIGHT;

    this.init();
  }

  init() {
    this.sheetWidth = 256;
    this.sheetHeight = 256;
    this.noOfRows = 4;
    this.noOfColumns = 4;

    this.frameWidth = this.sheetWidth / this.noOfRows;
    this.frameHeight = this.sheetHeight / this.noOfColumns;

    this.sourceX = 0;
    this.sourceY = 0;
    this.rowIndexInSheet = 0;
    this.columnIndexInSheet = 0; 

    this.frameChangeRate = 20;

    this.keyDownDuration = 0;
  }

  updateFrame(){
    if(this.keyDownDuration % this.frameChangeRate == 1){
     this.columnIndexInSheet = ++this.columnIndexInSheet % this.noOfColumns;
    }
    this.sourceX = this.columnIndexInSheet * this.frameWidth;
    this.sourceY = this.rowIndexInSheet * this.frameHeight;
  }

  draw(ctx) {
    this.updateFrame();
    ctx.drawImage(
      this.spriteSheet,
      this.sourceX ,
      this.sourceY, 
      this.frameWidth,
      this.frameHeight,
      this.xPosition,
      this.yPosition,
      this.scaleWidth,
      this.scaleHeight
    );
  }

  updatePosition(){
    if(this.controller.left){
      this.offsetX--;
      this.rowIndexInSheet = 1;
      this.keyDownDuration++;
    }
    else if(this.controller.right){
      this.offsetX++;
      this.rowIndexInSheet = 2;
      this.keyDownDuration++;
    }
    else if(this.controller.up){
      this.offsetY--;
      this.rowIndexInSheet = 3;
      this.keyDownDuration++;
    }
    else if(this.controller.down){
      this.offsetY++;
      this.rowIndexInSheet = 0;
      this.keyDownDuration++;
    }else{
      this.keyDownDuration = 0;
    }
  }

}
