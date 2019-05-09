class Battle {
  constructor(player, opponent, viewPort, imageLoader, gameWorldObject) {
    this.gameWorldObject = gameWorldObject;
    this.ctx = this.gameWorldObject.ctx;

    this.player = player;

    this.opponent = opponent;

    this.opponentPokemon = this.opponent.pokemon;
    this.playerPokemon = this.player.pokemon;

    this.viewPort = viewPort;
    this.imageLoader = imageLoader;
    this.battleBackgroundImage = this.imageLoader.images.battleBackground;
    this.battleDialogueImage = this.imageLoader.images.battleDialogue;
    this.battleMovesImage = this.imageLoader.images.battleMoves;
    this.battleInfoBarImage = this.imageLoader.images.battleInfoBar;
    this.battleHPIndicatorImage = this.imageLoader.images.battleHPIndicator;

    this.backgroundWidth = this.viewPort.width;
    this.backgroundHeight = this.viewPort.height * 0.7;

    this.textBoxWidth = this.viewPort.width;
    this.textBoxHeight = this.viewPort.height * 0.3;

    this.upperPadding = 50;

    this.TEXT_OFFSET_X = 50;
    this.TEXT_OFFSET_Y = 50;

    this.currentState = OPPONENT_INTRO_STATE;

    this.MOVE_A = 0;
    this.MOVE_B = 1;
    this.MOVE_C = 2;
    this.MOVE_D = 3;

    this.currentHighlightedMove = this.MOVE_A;

    this.opponentMove = 0;
    this.playerTurnFlag = true;

    document.onkeyup = event => this.moveController(event);
  }

  draw() {
    switch (this.currentState) {
      case OPPONENT_INTRO_STATE:
        this.drawOpponentIntro();
        break;

      case PLAYER_TURN_STATE:
        this.drawPlayerTurn();
        break;

      case PLAYER_ATTACK_STATE:
        this.drawPlayerAttack();
        break;
      case OPPONENT_ATTACK_STATE:
        this.drawOpponentAttack();
    }
  }

  drawOpponentAttack() {
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);

    this.drawBackground();
    this.drawOpponentPokemonHPIndicator();
    this.drawPlayerPokemonHPIndicator();

    this.drawPlayerPokemon();
    this.drawOpponentPokemon();
    this.drawOpponentPokemonInfoBar();
    this.drawPlayerPokemonInfoBar();

    this.drawOpponentAttackDialogue();

    setTimeout(() => {
      this.currentState = PLAYER_TURN_STATE;
      this.gameWorldObject.runEngine();
    }, 2000);
  }

  drawOpponentAttackDialogue(){
    if(!this.playerTurnFlag){
    this.opponentMove = Math.floor(Math.random() * 4);
    this.applyDamage(this.playerPokemon, this.opponentPokemon.moves[this.opponentMove])
    this.playerTurnFlag = true;
    }

    let message = this.getEffectivenessMessage(this.playerPokemon, this.opponentPokemon.moves[this.opponentMove].type);
    this.drawDialogue(
      this.opponentPokemon.name +
        " used " +
        this.opponentPokemon.moves[this.opponentMove].name,
      message
    );
  }


  drawPlayerAttack() {
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);

    this.drawBackground();
    this.drawOpponentPokemonHPIndicator();
    this.drawPlayerPokemonHPIndicator();

    this.drawPlayerPokemon();
    this.drawOpponentPokemon();
    this.drawOpponentPokemonInfoBar();
    this.drawPlayerPokemonInfoBar();

    this.drawPlayerAttackDialogue();  
 

    setTimeout(() => {
      this.currentState = OPPONENT_ATTACK_STATE;
      this.gameWorldObject.runEngine();
    }, 2000);
  }

  drawPlayerAttackDialogue(){
    let message = this.getEffectivenessMessage(
      this.opponentPokemon,
      this.playerPokemon.moves[this.currentHighlightedMove].type
    );
    this.drawDialogue(
      this.playerPokemon.name +
        " used " +
        this.playerPokemon.moves[this.currentHighlightedMove].name,
        message
    );
  }

  getEffectivenessMessage(pokemon, moveType) {
    let effectiveness = this.getEffectiveness(pokemon, moveType);
    if (effectiveness === 0.5) {
      return "It's not very effective";
    } else if (effectiveness === 1.5) {
      return "It's super effective";
    } else {
      return " ";
    }
  }

  drawOpponentIntro() {
    window.cancelAnimationFrame(this.gameWorldObject.mainEngine);

    this.drawBackground();

    this.drawPlayer();

    this.drawOpponent();

    this.drawDialogue(
      "Trainer " + this.opponent.name + " sent",
      "out " + this.opponentPokemon.name + "!"
    );

    setTimeout(() => {
      this.currentState = PLAYER_TURN_STATE;
      this.gameWorldObject.runEngine();
    }, 2000);
  }

  drawBackground() {
    this.ctx.drawImage(
      this.battleBackgroundImage,
      clientWidth * 0.5 - this.backgroundWidth * 0.5,
      this.upperPadding,
      this.backgroundWidth,
      this.backgroundHeight
    );
  }

  drawDialogue(text1, text2) {
    this.ctx.drawImage(
      this.battleDialogueImage,
      clientWidth * 0.5 - this.textBoxWidth * 0.5,
      this.backgroundHeight + this.upperPadding,
      this.textBoxWidth,
      this.textBoxHeight
    );
    this.ctx.font = "15px pkmn";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      text1,
      this.TEXT_OFFSET_X + clientWidth * 0.5 - this.textBoxWidth * 0.5,
      this.TEXT_OFFSET_Y + this.backgroundHeight + this.upperPadding
    );

    this.ctx.fillText(
      text2,
      this.TEXT_OFFSET_X + clientWidth * 0.5 - this.textBoxWidth * 0.5,
      this.TEXT_OFFSET_Y * 2 + this.backgroundHeight + this.upperPadding
    );
  }

  drawOpponent() {
    let imageWidth = 64;
    let imageHeight = 160;
    let xPosition = clientWidth * 0.5 + imageWidth * 3;
    let yPosition = this.upperPadding * 2;
    this.ctx.drawImage(
      this.opponent.battleImage,
      xPosition,
      yPosition,
      imageWidth,
      imageHeight
    );
  }

  drawPlayer() {
    let imageWidth = 64;
    let imageHeight = 80;
    let xPosition = clientWidth * 0.5 - imageWidth * 4;
    let yPosition = this.backgroundHeight + this.upperPadding - imageHeight;
    this.ctx.drawImage(
      this.player.battleImage,
      xPosition,
      yPosition,
      imageWidth,
      imageHeight
    );
  }

  drawPlayerTurn() {
    this.drawBackground();

    this.drawOpponentPokemonHPIndicator();
    this.drawPlayerPokemonHPIndicator();

    this.drawPlayerPokemon();
    this.drawOpponentPokemon();
    this.drawOpponentPokemonInfoBar();
    this.drawPlayerPokemonInfoBar();

    this.drawMovesDisplay();

    this.drawCurrentMoveHighlighter();
  }

  drawOpponentPokemon() {
    let cropSize = 64;
    let imageWidth = cropSize * 2.5;
    let imageHeight = cropSize * 2.5;
    let xPosition = clientWidth * 0.5 + imageWidth;
    let yPosition = this.upperPadding * 2;
    this.ctx.drawImage(
      this.opponentPokemon.image,
      0,
      0,
      cropSize,
      cropSize,
      xPosition,
      yPosition,
      imageWidth,
      imageHeight
    );
  }

  drawPlayerPokemon() {
    let cropSize = 64;
    let imageWidth = cropSize * 2.5;
    let imageHeight = cropSize * 2.5;
    let xPosition = clientWidth * 0.5 - imageWidth * 2;
    let yPosition = this.backgroundHeight + this.upperPadding - imageHeight;
    this.ctx.drawImage(
      this.playerPokemon.image,
      64,
      0,
      cropSize,
      cropSize,
      xPosition,
      yPosition,
      imageWidth,
      imageHeight
    );
  }

  drawMovesDisplay() {
    this.ctx.drawImage(
      this.battleMovesImage,
      clientWidth * 0.5 - this.textBoxWidth * 0.5,
      this.backgroundHeight + this.upperPadding,
      this.textBoxWidth,
      this.textBoxHeight
    );

    this.ctx.font = "18px pkmn";
    this.ctx.fillStyle = "#283030";
    this.ctx.fillText(
      this.playerPokemon.moves[0].name,
      this.TEXT_OFFSET_X + clientWidth * 0.5 - this.textBoxWidth * 0.5,
      this.TEXT_OFFSET_Y + this.backgroundHeight + this.upperPadding
    );

    this.ctx.fillText(
      this.playerPokemon.moves[1].name,
      this.TEXT_OFFSET_X + clientWidth * 0.5 - 150,
      this.TEXT_OFFSET_Y + this.backgroundHeight + this.upperPadding
    );

    this.ctx.fillText(
      this.playerPokemon.moves[2].name,
      this.TEXT_OFFSET_X + clientWidth * 0.5 - this.textBoxWidth * 0.5,
      this.TEXT_OFFSET_Y + this.backgroundHeight + this.upperPadding * 2
    );

    this.ctx.fillText(
      this.playerPokemon.moves[3].name,
      this.TEXT_OFFSET_X + clientWidth * 0.5 - 150,
      this.TEXT_OFFSET_Y + this.backgroundHeight + this.upperPadding * 2
    );

    let moveType = this.playerPokemon.moves[this.currentHighlightedMove].type;

    this.ctx.fillText(
      "Type / " + moveType.charAt(0).toUpperCase() + moveType.slice(1),
      this.TEXT_OFFSET_X + clientWidth * 0.5 + 160,
      this.TEXT_OFFSET_Y + this.backgroundHeight + this.upperPadding * 1.5
    );
  }

  drawOpponentPokemonInfoBar() {
    let width = this.battleInfoBarImage.width * 3;
    let height = this.battleInfoBarImage.height * 3;

    this.ctx.drawImage(
      this.battleInfoBarImage,
      clientWidth * 0.5 - width,
      this.upperPadding * 1.5,
      width,
      height
    );

    this.ctx.font = "15px pkmn";
    this.ctx.fillStyle = "#283030";

    this.ctx.fillText(
      this.opponentPokemon.name.toUpperCase(),
      clientWidth * 0.5 - width + 20,
      this.upperPadding * 2.2
    );
    this.ctx.fillText(
      "Lv" + this.opponentPokemon.level,
      clientWidth * 0.5 - width + 190,
      this.upperPadding * 2.2
    );
  }

  drawPlayerPokemonInfoBar() {
    let width = this.battleInfoBarImage.width * 3;
    let height = this.battleInfoBarImage.height * 3;

    this.ctx.drawImage(
      this.battleInfoBarImage,
      clientWidth * 0.5 + width * 0.25,
      this.upperPadding * 6,
      width,
      height
    );

    this.ctx.font = "15px pkmn";
    this.ctx.fillStyle = "#283030";

    this.ctx.fillText(
      this.playerPokemon.name.toUpperCase(),
      clientWidth * 0.5 + 95,
      this.upperPadding * 7 - 15
    );
    this.ctx.fillText(
      "Lv" + this.playerPokemon.level,
      clientWidth * 0.5 + 265,
      this.upperPadding * 7 - 15
    );
  }

  drawOpponentPokemonHPIndicator() {
    let hpLeftInPercent =
      ((this.opponentPokemon.hitPoints - this.opponentPokemon.damageTaken) /
        this.opponentPokemon.hitPoints) *
      100;

    let offsetX = 182;
    let offsetY = 79;

    let width = this.battleHPIndicatorImage.width * 3 * (hpLeftInPercent / 100);
    let height = this.battleHPIndicatorImage.height * 3;

    this.ctx.drawImage(
      this.battleHPIndicatorImage,
      clientWidth * 0.5 - offsetX,
      this.upperPadding + offsetY,
      width,
      height
    );
  }

  drawPlayerPokemonHPIndicator() {
    let hpLeftInPercent =
      ((this.playerPokemon.hitPoints - this.playerPokemon.damageTaken) /
        this.playerPokemon.hitPoints) *
      100;

    let offsetX = -196;
    let offsetY = 304;

    let width = this.battleHPIndicatorImage.width * 3 * (hpLeftInPercent / 100);
    let height = this.battleHPIndicatorImage.height * 3;

    this.ctx.drawImage(
      this.battleHPIndicatorImage,
      clientWidth * 0.5 - offsetX,
      this.upperPadding + offsetY,
      width,
      height
    );
  }

  drawCurrentMoveHighlighter() {
    this.ctx.strokeStyle = "#19b84e";

    let offsetX;
    let offsetY;
    switch (this.currentHighlightedMove) {
      case this.MOVE_A:
        offsetX = -10;
        offsetY = -25;
        break;

      case this.MOVE_B:
        offsetX = 320;
        offsetY = -25;
        break;

      case this.MOVE_C:
        offsetX = -10;
        offsetY = 25;
        break;

      case this.MOVE_D:
        offsetX = 320;
        offsetY = 25;
    }

    this.ctx.rect(
      this.TEXT_OFFSET_X +
        clientWidth * 0.5 -
        this.textBoxWidth * 0.5 +
        offsetX,
      this.TEXT_OFFSET_Y + this.backgroundHeight + this.upperPadding + offsetY,
      240,
      40
    );
    this.ctx.stroke();
  }

  moveController(event) {
    if (this.currentState === PLAYER_TURN_STATE) {
      if (event.keyCode === 13) {
        this.transitionToPlayerAttackState();
      }
      switch (this.currentHighlightedMove) {
        case this.MOVE_A:
          if (event.keyCode === 37 || event.keyCode === 39) {
            this.currentHighlightedMove = this.MOVE_B;
          } else if (event.keyCode === 40 || event.keyCode === 38) {
            this.currentHighlightedMove = this.MOVE_C;
          }
          break;

        case this.MOVE_B:
          if (event.keyCode === 37 || event.keyCode === 39) {
            this.currentHighlightedMove = this.MOVE_A;
          } else if (event.keyCode === 38 || event.keyCode === 40) {
            this.currentHighlightedMove = this.MOVE_D;
          }
          break;

        case this.MOVE_C:
          if (event.keyCode === 37 || event.keyCode === 39) {
            this.currentHighlightedMove = this.MOVE_D;
          } else if (event.keyCode === 38 || event.keyCode === 40) {
            this.currentHighlightedMove = this.MOVE_A;
          }
          break;

        case this.MOVE_D:
          if (event.keyCode === 37 || event.keyCode === 39) {
            this.currentHighlightedMove = this.MOVE_C;
          } else if (event.keyCode === 38 || event.keyCode === 40) {
            this.currentHighlightedMove = this.MOVE_B;
          }
      }
    }
  }

  transitionToPlayerAttackState() {
    this.applyDamage(
      this.opponentPokemon,
      this.playerPokemon.moves[this.currentHighlightedMove]
    );
    this.currentState = PLAYER_ATTACK_STATE;
    this.playerTurnFlag = false;
  }

  applyDamage(pokemon, move) {
    let damageMultiplier = this.getEffectiveness(pokemon, move.type);
    pokemon.damageTaken = pokemon.damageTaken + move.damage * damageMultiplier;
  }

  getEffectiveness(pokemon, type) {
    if (pokemon.isStrongAgainst(type)) {
      return 0.5;
    } else if (pokemon.isWeakAgainst(type)) {
      return 1.5;
    } else {
      return 1;
    }
  }
}
