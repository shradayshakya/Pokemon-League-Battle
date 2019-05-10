class PokeMenu{
    constructor(viewPort, gameWorldObject) {
        this.viewPort = viewPort;
        this.gameWorldObject = gameWorldObject;
        this.ctx = this.gameWorldObject.ctx;
      }

      draw(){
        this.drawLogo();

        this.drawChooseText();

        this.drawFirstPokemon();
        this.drawSecondPokemon();
        this.drawThirdPokemon();
        
        this.drawControlInfo();
      }


      
      drawLogo(){
        let pokeLogo = this.gameWorldObject.imageLoader.images.logo;
        this.ctx.drawImage(
          pokeLogo,
          clientWidth * 0.5 - SCALE_WIDTH * 3,
          0,
          SCALE_WIDTH * 6,
          SCALE_HEIGHT * 6
        );
      }

      

      drawChooseText(){
        let choosePokemon = this.gameWorldObject.imageLoader.images.choosePokemon;
        this.ctx.drawImage(
            choosePokemon,
          clientWidth * 0.5 - SCALE_WIDTH * 2,
          SCALE_WIDTH * 4.5,
          SCALE_WIDTH * 4,
          SCALE_HEIGHT * 0.8
        );
      }

      drawControlInfo(){
        let control = this.gameWorldObject.imageLoader.images.control;
        this.ctx.drawImage(
            control,
          clientWidth * 0.5 - SCALE_WIDTH * 2.5,
          SCALE_WIDTH * 10,
          SCALE_WIDTH * 5,
          SCALE_HEIGHT * 1
        );
      }


      drawFirstPokemon(){
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
      }

      drawSecondPokemon(){
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
      }

      drawThirdPokemon(){
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