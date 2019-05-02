class ViewPort{
    constructor(xPosition, yPosition, width, height){
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
    }

    scrollTo(x , y) {
        this.xPosition = x - this.width * 0.5;
        this.yPosition = y - this.height * 0.5;
    }
}