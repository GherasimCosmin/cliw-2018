import Game from "./Game.js";
import Rectangle from "./Rectangle.js";

let p1 = new Rectangle(100, 200, {
    JUMP_STEP: 10,
    MAX_JUMP_HEIGHT: 150,
    keyCode: 87
});
let p2 = new Rectangle(200, 100);

Game.register(p1);
Game.register(p2);