class ViewPort{
    constructor(xPosition, yPosition, width, height){
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
    }
    
    updatePositions(x , y) {
        this.xPosition = x;
        this.yPosition = y;
    }
}