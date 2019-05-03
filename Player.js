class Player {
  constructor(xPosition, yPosition, offsetX, offsetY, spriteSheet, controller) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.spriteSheet = spriteSheet;

    this.offsetX = offsetX;
    this.offsetY = offsetY;

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

  updatePosition(){
    if(this.controller.left){
      this.offsetX--;
    }
    else if(this.controller.right){
      this.offsetX++;
    }
    else if(this.controller.up){
      this.offsetY--;
    }
    else if(this.controller.down){
      this.offsetY++;
    }
  }

}
