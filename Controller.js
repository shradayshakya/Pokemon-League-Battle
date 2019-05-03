class Controller {
    constructor(element){
        this.left = false;
        this.up = false;
        this.right = false;
        this.down = false;
        var that = this;

        this.keyDownDuration = 0;

        element.addEventListener("keydown", ()=>that.handleKeyDown(event,that));
        element.addEventListener("keyup", ()=>that.handleKeyUp(event,that));
    }


    handleKeyDown(event, that){
        switch(event.keyCode){
            case LEFT_ARROW:
            that.left = true;
            break;
            case UP_ARROW:
            that.up = true;
            break;
            case RIGHT_ARROW:
            that.right = true;
            break;
            case DOWN_ARROW:
            that.down = true;
        }
        this.keyDownDuration++;
    }

    handleKeyUp(event, that){
        switch(event.keyCode){
            case LEFT_ARROW:
            that.left = false;
            break;
            case UP_ARROW:
            that.up = false;
            break;
            case RIGHT_ARROW:
            that.right = false;
            break;
            case DOWN_ARROW:
            that.down = false;
        }
        this.keyDownDuration = 0;
    }
}