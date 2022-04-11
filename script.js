var c = document.getElementById("canvas");
    var canvas = c.getContext("2d");
var xSlice = 0;
var ySlice = 0;
$(document).ready(function() {
    
    drawBackground();
})
function drawBackground() {
    var img = new Image();
    img.src = "images/maps/map1.png"
    img.onload = function () {
        canvas.drawImage(img, xSlice, ySlice, 21.875, 12.5, 0, 0, 1000, 750);
    }   
}