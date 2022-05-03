let mySound;
let amplitude; 


function preload() {
  mySound = loadSound("libraries/Gooey .mp3");
}

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasContainer")
  amplitude = new p5.Amplitude();
}

function draw() {
  background(220);
  text("Click here to play", 10, 20);
  let level = amplitude.getLevel();
  let dia = map(level, 0.0, 1.0, 0, 500);
  ellipse(width/2, height/2, dia, dia);

}

function mousePressed() {
  mySound.play();
}
