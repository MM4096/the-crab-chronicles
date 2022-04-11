var c = document.getElementById("canvas");
    var canvas = c.getContext("2d");
var xSlice = 0;
var ySlice = 0;

$(document).ready(function() {
})

function drawBackground() {
    var img = document.getElementById("map1");
    canvas.clearRect(0, 0, 1000, 750);
    canvas.drawImage(img, xSlice, ySlice, 21.875, 12.5, 0, 0, 1000, 750);
}

document.addEventListener("keydown", function(e) {
    let pressed = e.key;
    if (pressed == "w") {
        if (ySlice > 0) {
            ySlice -= 0.1;
            drawBackground();
        }
    } else if (pressed == "a") {
        if (xSlice > 0) {
            xSlice -= 0.1;
            drawBackground();
        }
        
    } else if (pressed == "s") {
        if (ySlice < 387) {
            ySlice += 0.1;
            drawBackground();
        }

    } else if (pressed == "d") {
        if (xSlice < 678) {
            xSlice += 0.1;
            drawBackground();
        }

    }
})