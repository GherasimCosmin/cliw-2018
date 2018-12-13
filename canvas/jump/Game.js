import Rectangle from "./Rectangle.js";

let Game = (function GameIIFE() {
    let canvas  = document.querySelector("canvas");
    let players = [];

    window.requestAnimationFrame(paint);

    return {
        register(player) {
            if (player instanceof Rectangle) {
                players.push(player);
            } else {
                console.error("You can only register Rectangle players!");
            }
        }
    }

    function paint() {
        let ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        players.forEach(drawPlayer);
        window.requestAnimationFrame(paint);
    }

    function drawPlayer(player) {
        let ctx = canvas.getContext("2d");
        let playerData = player.getData();
        
        ctx.beginPath();
        ctx.rect(playerData.x, playerData.y, playerData.width, playerData.height);
        ctx.fillStyle = playerData.color;
        ctx.fill();
    }
}());

export default Game;