import Game from "./Game.js";
import Player from "./Player.js";

Game.register(new Player(15, 15));
Game.register(new Player(100, 100, {
    UP: 87,
    RIGHT: 68,
    DOWN: 83,
    LEFT: 65
}));