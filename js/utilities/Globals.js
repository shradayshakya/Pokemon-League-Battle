const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;

const SCALE_WIDTH = 48;
const SCALE_HEIGHT = 48;

var clientWidth;
var clientHeight;

var opponentTileValue = 98;
var chanseyTileValue = 99;

var VIEWPORT_INITIAL_WIDTH = 960;
var VIEWPORT_INITIAL_HEIGHT = 500;

//MAIN GAME STATES
var MENU_STATE = 0;
var TILE_WORLD_STATE = 1;
var BEFORE_BATTLE_STATE = 2;
var BATTLE_STATE = 3;
var AFTER_BATTLE_STATE = 4;
var HEALING_STATE = 5;
var HEALING_DIALOGUE_STATE = 6;
var LOCKED_DIALOGUE_STATE = 7;
var OPPONENT_DIALOGUE_STATE = 8;
var ENTERING_PASSWORD_STATE = 9;
var NEXT_LEVEL_STATE = 10;
var GAMEOVER_STATE = 11;

//BATTLE STATES
var OPPONENT_INTRO_STATE = 0;
var PLAYER_TURN_STATE = 1;
var PLAYER_ATTACK_STATE = 2;
var OPPONENT_ATTACK_STATE = 3;
var PLAYER_WIN_STATE = 4;
var OPPONENT_WIN_STATE = 5;
