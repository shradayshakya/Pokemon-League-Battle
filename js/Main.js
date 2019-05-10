class GameWorld {
  constructor(canvasElement) {
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext("2d");
    clientWidth = document.documentElement.clientWidth;
    clientHeight = document.documentElement.clientHeight;
    this.canvasElement.width = document.documentElement.clientWidth;
    this.canvasElement.height = document.documentElement.clientHeight;

    this.frameRate = 20;
    this.loadingTime = 0;
    this.updateCanvasSize();

    this.currentState = MENU_STATE;

    this.playerPokemon = 'Charizard';
    this.garyPokemon = 'Blastoise';

    this.init();
  }

  init() {
    this.imageLoader = new ImageLoader();
    this.audioLoader = new AudioLoader();

    this.resetGameComponents();

    this.transitionUtilities = new TransitionUtilities(this.viewPort, this);

    this.start();
  }

  start() {
    var intervalId = setInterval(() => {
      if (
        this.imageLoader.hasAllImagesLoaded() &&
        this.audioLoader.hasAllAudiosLoaded()
      ) {
        clearInterval(intervalId);
        this.runEngine();
      } else {

        this.ctx.font = "20px arial";
        this.ctx.fillText(
          "Loading",
          clientWidth * 0.5 - 10,
          clientHeight * 0.5
        );
      }
    });
  }

  runEngine() {
    this.mainEngine = requestAnimationFrame(() => this.runEngine());

    this.updateCanvasSize();
    switch (this.currentState) {
      
      case MENU_STATE:
      this.pokeMenu.draw();
        break;

      case TILE_WORLD_STATE:
        this.audioLoader.play("finalRoad");
        this.currentTileWorld.draw();
        break;

      case BEFORE_BATTLE_STATE:
        this.audioLoader.stop("finalRoad");
        this.audioLoader.play("finalBattle");
        this.transitionUtilities.beforeBattle();
        break;

      case BATTLE_STATE:
        this.battle.draw();
        break;

      case HEALING_STATE:
        this.audioLoader.stop("finalRoad");
        this.audioLoader.play("pokemonRecovery");
        this.transitionUtilities.healPokemon();
        break;

      case NEXT_LEVEL_STATE:
        this.audioLoader.play("doorOpen");
        this.transitionUtilities.nextLevel();
        break;

      case GAMEOVER_STATE:
        this.audioLoader.stop("finalBattle");
        this.transitionUtilities.gameOver();
        break;
    }
  }

  resetGameComponents() {
    this.pokeMenu = new PokeMenu(this.viewPort, this.audioLoader, this);

    this.currentMapIndex = 0;

    this.player = new Player(
      Math.floor(clientWidth * 0.5 - SCALE_WIDTH * 0.5),
      Math.floor(clientHeight * 0.5 - SCALE_HEIGHT * 0.5),
      this.playerPokemon,
      this.imageLoader.images.playerSpriteSheet,
      this.imageLoader.images.playerBattle,
      this.imageLoader
    );

    this.pokeMaps = this.getAllMaps();

    this.opponents = this.getAllOppnenets();

    this.setLevel();
  }

  setLevel() {
    this.setViewPortAndMap();

    this.setOpponent();

    this.setBattle();
  }

  setViewPortAndMap() {
    this.currentMap = this.pokeMaps[this.currentMapIndex];

    this.viewPort = new ViewPort(
      this.currentMap.initialViewportX,
      this.currentMap.initialViewportY,
      VIEWPORT_INITIAL_WIDTH,
      VIEWPORT_INITIAL_HEIGHT
    );

    this.currentTileWorld = new TileWorld(
      this.player,
      this.currentMap,
      this.viewPort,
      this
    );
  }

  setOpponent() {
    this.currentOpponent = this.opponents[this.currentMapIndex];
  }

  setBattle() {
    this.hasBattleCompleted = false;

    this.battle = new Battle(
      this.player,
      this.currentOpponent,
      this.viewPort,
      this.imageLoader,
      this.audioLoader,
      this
    );
  }

  updateCanvasSize() {
    clientWidth = document.documentElement.clientWidth;
    clientHeight = document.documentElement.clientHeight;
    this.canvasElement.width = document.documentElement.clientWidth;
    this.canvasElement.height = document.documentElement.clientHeight;
  }

  getAllMaps() {
    let pokeMaps = [];

    pokeMaps.push(
      new PokeMap(
        MapData.gateMap.tileArray,
        MapData.gateMap.numberOfRows,
        MapData.gateMap.numberOfColumns,
        MapData.gateMap.secondWalkableTileValue,
        MapData.gateMap.exitTileValue,
        MapData.gateMap.initialViewportX,
        MapData.gateMap.initialViewportY,
        this.imageLoader.images.gateTileSheet,
        this.imageLoader.images.garyTile
      )
    );

    return pokeMaps;
  }

  getAllOppnenets() {
    let opponents = [];
    opponents.push(
      new Opponent(
        OpponentData.Gary.name,
        this.imageLoader.images.garyBattle,
        this.garyPokemon,
        this.imageLoader
      )
    );

    return opponents;
  }
}
