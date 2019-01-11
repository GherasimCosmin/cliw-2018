let Game = (function () {
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");

    let players = [];
    let width = 50;
    let height = 50;

    window.requestAnimationFrame(paint);
    return {
        register: function registerPlayer(player) {
            players.push(player);
        }
    }

    function paint() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        players.forEach(player => {
            let playerData = player.getData();
            drawRect(playerData.x, playerData.y);
        });


        for (let i = 0; i < players.length - 1; i++) {
            for (let j = i + 1; j < players.length; j++) {
                if (isOver(players[i].getData(), players[j].getData())) {
                    setTimeout(() => {
                        alert("Game over");
                    }, 0);
                    return;
                }
            }
        }

        window.requestAnimationFrame(paint);
    }

    function drawRect(x, y) {
        ctx.beginPath();
        ctx.rect(x, y, 50, 50);
        ctx.fill();
    }



    function isOver(rect1, rect2) {
        if (rect1.x <= rect2.x + width && rect1.x + width >= rect2.x) {
            if (rect1.y <= rect2.y + height && rect1.y + height >= rect2.y) {
                return true;
            }
        }
        return false
    }
}());

export default Game;