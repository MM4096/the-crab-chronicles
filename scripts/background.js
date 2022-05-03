var map = new Array();
var xPixelCrop = 0;
var yPixelCrop = 0;
var xStart = 0;
var yStart = 0;
$(document).ready(function() {
    console.time("Array construct finished in");
    for (let i = 0; i < 1000; i++) {
        map[i] = new Array();
        for (let j = 0; j < 1000; j++) {
            map[i].push(1);
        }
    }
    console.timeEnd("Array construct finished in");

    console.time("Shallow Ocean generated in");
    biomeGeneration(10, 15, 150, 250, 0)
    console.timeEnd("Shallow Ocean generated in");

    console.time("Warm Ocean generated in")
    biomeGeneration(5, 10, 100, 150, 4);
    console.timeEnd("Warm Ocean generated in")

    console.time("Kelp Forests generated in")
    biomeGeneration(1, 3, 200, 250, 6);
    console.timeEnd("Kelp Forests generated in")

    drawBackground();
})
function drawBackground() {
    let color = "#00bcd4";
    xStart = Math.floor(xPixelCrop / 8);
    xPixelCrop = xPixelCrop % 8;
    yStart = yPixelCrop % 8;
    yPixelCrop = Math.floor(yPixelCrop / 8);
    for (let x = xStart; x < 125 + xStart; x++) {
        for (let y = yStart; y < 100 + yStart; y++) {
            let pixel = map[x][y];
            switch (pixel) {
                case 0:
                    color = "#00bcd4"
                    break
                
                case 1:
                    color = "#03cfe6";
                    break
                
        
                case 4:
                    color = "#4da5e3";
                    break
        
                case 6:
                    color = "#15a3a3";
                    break
                default:
                    color = "#00bcd4";
                    break
            }
            canvas.beginPath();
            canvas.fillStyle = color;
            canvas.fillRect(xPixelCrop + x * 8, yPixelCrop + y * 8, 8, 8);
        }
    }
}
function randInt(lowest, highest) {
    return Math.round(Math.random() * (highest - lowest)) + lowest;
}

//Biome generation
function biomeGeneration(generateNumberMin, generateNumberMax, generateSizeMin, generateSizeMax, biomeCode) {
    let rand = randInt(generateNumberMin, generateNumberMax);
    for (let k = 1; k <= rand; k++) {
        let position = [randInt(0, 1000), randInt(0, 1000)];
        let size = [randInt(generateSizeMin, generateSizeMax), randInt(generateSizeMin, generateSizeMax)]
        for (let i = position[0]; i < position[0] + size[0]; i++) {
            for (let j = position[1]; j < position[1] + size[1]; j++) {
                if (i < 1000 && j < 1000) {
                map[i][j] = parseInt(biomeCode); 
                }
            }
        }
    }
}