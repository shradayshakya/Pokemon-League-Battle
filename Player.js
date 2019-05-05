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

    this.directionX = 0;
    this.directionY = 0;
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

  setDirection(){
    if(this.controller.left){
      this.directionX = -1;
      this.directionY =  0;
      this.rowIndexInSheet = 1;
    }
    else if(this.controller.right){
      this.directionX = 1;
      this.directionY = 0;
      this.rowIndexInSheet = 2;
    }
    else if(this.controller.up){
      this.directionY = -1;
      this.directionX =  0;
      this.rowIndexInSheet = 3;
    }
    else if(this.controller.down){
      this.directionY = 1;
      this.directionX = 0;
      this.rowIndexInSheet = 0;
    }else {
      this.directionX = 0 ;
      this.directionY = 0;
    }
  }

  move(map, viewPort){
    this.setDirection();

    let mapValue = map.getCenterValue(this.offsetX + this.directionX , this.offsetY + this.directionY, viewPort);

    if(mapValue < 3){
      this.offsetX += this.directionX;
      this.offsetY += this.directionY;
       if(this.directionX != 0 || this.directionY != 0){
      this.keyDownDuration++;
    }
    }
  }
} 
