class Player {
  constructor(xPosition, yPosition, spriteSheet, controller) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.spriteSheet = spriteSheet;
    this.controller = controller;

    this.DISTANCE = 1;

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

    this.updatePosition();
  }

  updatePosition(){
    if(this.controller.left){
      this.xPosition -= this.DISTANCE;
    }
    else if(this.controller.right){
      this.xPosition += this.DISTANCE;
    }
    else if(this.controller.up){
      this.yPosition -= this.DISTANCE;
    }
    else if(this.controller.down){
      this.yPosition += this.DISTANCE;
    }
  }

}
