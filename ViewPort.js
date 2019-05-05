class ViewPort{
    constructor(xPosition, yPosition, width, height){
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
    }
    
  drawBorder(ctx){
    ctx.lineWidth = SCALE_WIDTH;
    ctx.strokeStyle = "white";
    ctx.strokeRect(
      clientWidth * 0.5 - ( this.width * 0.5 + SCALE_WIDTH * 0.5),
      clientHeight * 0.5 - ( this.height * 0.5 + SCALE_HEIGHT * 0.5),
      this.width + SCALE_WIDTH,
      this.height + SCALE_HEIGHT
    );
  }
}