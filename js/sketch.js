// function setup() {
//     let myCanvas = createCanvas(windowWidth, windowHeight);
//     myCanvas.parent("canvas");
//     background(0);
// }
//
// function setup() {
//     var myCanvas = createCanvas(windowWidth, windowHeight);
//     pixelDensity(1);
// }
//
// function draw(){
//     background(0);
//     loadPixels();
//
//     for(var y = 0; y < height; y++) {
//         for(var x = 0; x < width; x++) {
//             var index = (x + y * width)*4;
//             pixels[index+0] = 160;
//             pixels[index+1] = 20;
//             pixels[index+2] = 255;
//             pixels[index+3] = random(noise(x/100.0, y/100.0) * 255);
//         }
//     }
//     updatePixels();
// }
//
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
