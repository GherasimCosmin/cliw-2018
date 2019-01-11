let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let x = 50;

window.requestAnimationFrame(paint);

function paint() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x++;
    
    ctx.beginPath();
    ctx.rect(x, 50, 50, 50);
    ctx.fillStyle = "aquamarine";

    ctx.fill();

    window.requestAnimationFrame(paint);
}