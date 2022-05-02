var c = document.getElementById("canvas");
var canvas = c.getContext("2d");

$(document).ready(function() {
    canvas.clearRect(0, 0, 1000, 800);
    drawScreen()
})
function drawScreen() {
    canvas.clearRect(0, 0, 1000, 800);
    drawBackground();
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
