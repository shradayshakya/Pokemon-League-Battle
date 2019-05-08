class Player {
  constructor(xPosition, yPosition, pokemonIdentifier, spriteSheet, battleImage, imageLoader) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;

    this.spriteSheet = spriteSheet;

    this.pokemonIdentifier = pokemonIdentifier;

    this.controller = new PlayerController(document);

    this.scaleWidth = SCALE_WIDTH;
    this.scaleHeight = SCALE_HEIGHT;

    this.battleImage = battleImage;

    this.imageLoader = imageLoader;

    this.setPokemon();

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

  updateDirection(){
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

  moveLegs(){
    if(this.directionX != 0 || this.directionY != 0){
      this.keyDownDuration++;
    }
  }

  
  setPokemon() {
    let pokemonData = PokemonData[this.pokemonIdentifier];
    this.pokemon = new Pokemon(
      pokemonData.name,
      pokemonData.hitPoints,
      0,
      pokemonData.attack,
      pokemonData.defence,
      pokemonData.level,
      pokemonData.moves,
      pokemonData.type,
      this.imageLoader
    );
  }

} 
