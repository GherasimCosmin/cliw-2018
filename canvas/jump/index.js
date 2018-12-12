import Game from "./Game.js";
import Rectangle from "./Rectangle.js";

let p1 = new Rectangle(100, 200, {
    JUMP_STEP: 10,
    MAX_JUMP_HEIGHT: 150,
    keyCode: 87,
    color: "#3aa3e9"
});
let p2 = new Rectangle(200, 100, {
    color: "#2ecc71 "
});

Game.register(p1);
Game.register(p2);