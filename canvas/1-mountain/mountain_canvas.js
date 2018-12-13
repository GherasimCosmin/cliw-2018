let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");



let birds = [{
    x: 400,
    y: 100
}, {
    x: 420,
    y: 90
}, {
    x: 420,
    y: 110
}];

window.requestAnimationFrame(onFrame);


/* Functions */
function onFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();
    drawMountains();
    drawSun();

    birds.forEach(bird => {
        drawBird(bird.x, bird.y);
        bird.x -= 1;
    });

    window.requestAnimationFrame(onFrame);
}

function drawBackground() {
    ctx.beginPath();
    ctx.rect(0, 0, 500, 200);
    ctx.fillStyle = "#3aa3e9 ";
    ctx.fill();

}

function drawMountains() {
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(50, 100);
    ctx.lineTo(100, 200);
    ctx.lineTo(125, 50);
    ctx.lineTo(150, 100);
    ctx.lineTo(175, 0);
    ctx.lineTo(200, 200);

    ctx.fillStyle = "black";
    ctx.fill();
}

function drawSun() {
    ctx.beginPath();
    ctx.arc(460, 40, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "#f7df1e";
    ctx.fill();
}

function drawBird(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y - 10);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y + 10);
    ctx.strokeStyle = "red";
    ctx.stroke();
}