var c = document.getElementById("canvas");
var canvas = c.getContext("2d");
var xSlice = 0;
var ySlice = 0;

$(document).ready(function() {
    canvas.clearRect(0, 0, 1000, 750);
    drawScreen()
})
function drawScreen() {
    canvas.clearRect(0, 0, 1000, 750);
    drawBackground();
    drawPlayer();
}
function drawPlayer() {
    canvas.beginPath();
    canvas.rect(495, 370, 10, 10);
    canvas.fillStyle = "#000000";
    canvas.fill();
}
function drawBackground() {
    var img = document.getElementById("map1");
    canvas.drawImage(img, xSlice, ySlice, 21.875, 12.5, 0, 0, 1000, 750);
    drawPlayer();
}

document.addEventListener("keydown", function(e) {
    let pressed = e.key;
    if (pressed == "w") {
        if (ySlice > 0) {
            ySlice -= 0.1;
            drawScreen()
            
        }
    } else if (pressed == "a") {
        if (xSlice > 0) {
            xSlice -= 0.1;
            drawScreen()
        }
        
    } else if (pressed == "s") {
        if (ySlice < 387) {
            ySlice += 0.1;
            drawScreen()
        }

    } else if (pressed == "d") {
        if (xSlice < 678) {
            xSlice += 0.1;
            drawScreen()
        }

    }
})