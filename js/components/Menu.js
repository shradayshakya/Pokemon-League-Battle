class PokeMenu {
  constructor(viewPort,audioLoader, gameWorldObject) {
    this.viewPort = viewPort;
    this.gameWorldObject = gameWorldObject;
    this.ctx = this.gameWorldObject.ctx;
    this.audioLoader = audioLoader;
    this.options = ["Charizard", "Blastoise", "Venusaur"];

    this.POKEMON_A = 0;
    this.POKEMON_B = 1;
    this.POKEMON_C = 2;

    this.currentHighlightedPokemon = this.POKEMON_A;

    this.controller = (event) =>{
      if(this.gameWorldObject.currentState == MENU_STATE){
        if(event.keyCode == 13){
          this.initiateGame();
        }
        if (event.keyCode === 37) {
          if(this.currentHighlightedPokemon != 0){
          this.audioLoader.play("beep");
          this.currentHighlightedPokemon =  (this.currentHighlightedPokemon - 1) % 3;
          }
        }
        if (event.keyCode === 39) {
          this.audioLoader.play("beep");
          if(this.currentHighlightedPokemon != 2){
          this.currentHighlightedPokemon =  (this.currentHighlightedPokemon + 1) % 3;
          }
        }
      }
    };

    document.addEventListener("keydown", this.controller);
  }

  initiateGame(){
     this.gameWorldObject.playerPokemon = this.options[this.currentHighlightedPokemon];
     this.gameWorldObject.garyPokemon = this.options[(this.currentHighlightedPokemon+1) % 3];
     this.gameWorldObject.currentState = TILE_WORLD_STATE;
     this.gameWorldObject.resetGameComponents();
     
     document.removeEventListener('keydown',this.controller, true);
  }

  draw() {
    this.drawLogo();
    this.drawChooseText();

    this.drawPokemonOptions();

    this.drawHighlighter();

    this.drawControlInfo();
  }

  drawHighlighter() {
    this.ctx.strokeStyle = "#19b84e";

    let positionX;
    let positionY;
    switch (this.currentHighlightedPokemon) {
      case this.POKEMON_A:
        positionX = clientWidth * 0.5 - SCALE_WIDTH * 6 - 10;
        positionY = SCALE_WIDTH * 6;
        break;

      case this.POKEMON_B:
        positionX = clientWidth * 0.5 - SCALE_WIDTH - 10;
        positionY = SCALE_WIDTH * 6;
        break;

      case this.POKEMON_C:
        positionX = clientWidth * 0.5 + SCALE_WIDTH * 4 - 15;
        positionY = SCALE_WIDTH * 6;
    }

    this.ctx.rect(
      positionX,
      positionY,
      SCALE_WIDTH * 3 + 20,
      SCALE_HEIGHT * 3 + 10
    );
    this.ctx.stroke();
  }

  drawLogo() {
    let pokeLogo = this.gameWorldObject.imageLoader.images.logo;
    this.ctx.drawImage(
      pokeLogo,
      clientWidth * 0.5 - SCALE_WIDTH * 3,
      0,
      SCALE_WIDTH * 6,
      SCALE_HEIGHT * 6
    );
  }

  drawChooseText() {
    let choosePokemon = this.gameWorldObject.imageLoader.images.choosePokemon;
    this.ctx.drawImage(
      choosePokemon,
      clientWidth * 0.5 - SCALE_WIDTH * 2,
      SCALE_WIDTH * 4.5,
      SCALE_WIDTH * 4,
      SCALE_HEIGHT * 0.8
    );
  }

  drawControlInfo() {
    let control = this.gameWorldObject.imageLoader.images.control;
    this.ctx.drawImage(
      control,
      clientWidth * 0.5 - SCALE_WIDTH * 2.5,
      SCALE_WIDTH * 10,
      SCALE_WIDTH * 5,
      SCALE_HEIGHT * 1
    );
  }

  drawPokemonOptions() {
    let charizard = this.gameWorldObject.imageLoader.images.Charizard;

    this.ctx.drawImage(
      charizard,
      0,
      0,
      63,
      64,
      clientWidth * 0.5 - SCALE_WIDTH * 6,
      SCALE_WIDTH * 6,
      SCALE_WIDTH * 3,
      SCALE_HEIGHT * 3
    );

    let blastoise = this.gameWorldObject.imageLoader.images.Blastoise;

    this.ctx.drawImage(
      blastoise,
      0,
      0,
      63,
      64,
      clientWidth * 0.5 - SCALE_WIDTH,
      SCALE_WIDTH * 6,
      SCALE_WIDTH * 3,
      SCALE_HEIGHT * 3
    );

    let venusaur = this.gameWorldObject.imageLoader.images.Venusaur;

    this.ctx.drawImage(
      venusaur,
      0,
      0,
      63,
      64,
      clientWidth * 0.5 + SCALE_WIDTH * 4,
      SCALE_WIDTH * 6,
      SCALE_WIDTH * 3,
      SCALE_HEIGHT * 3
    );
  }
}
