class Controller {
    constructor(element){
        this.left = false;
        this.up = false;
        this.right = false;
        this.down = false;

        element.addEventListener("keydown", ()=>this.handleKeyDown(event));
        element.addEventListener("keyup", ()=>this.handleKeyUp(event));
    }


    handleKeyDown(event){
        switch(event.keyCode){
            case LEFT_ARROW:
            this.left = true;
            break;
            case UP_ARROW:
            this.up = true;
            break;
            case RIGHT_ARROW:
            this.right = true;
            break;
            case DOWN_ARROW:
            this.down = true;
        }
    }

    handleKeyUp(event){
        switch(event.keyCode){
            case LEFT_ARROW:
            this.left = false;
            break;
            case UP_ARROW:
            this.up = false;
            break;
            case RIGHT_ARROW:
            this.right = false;
            break;
            case DOWN_ARROW:
            this.down = false;
        }
        this.keyDownDuration = 0;
    }
}