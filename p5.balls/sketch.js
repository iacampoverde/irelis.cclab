let numCircle = 100;

let x = [];
let y = [];
let speedX = [];
let speedY = [];

let radius = 12;
function setup() {
  let c= createCanvas(400, 400);
  c.parent("canvascontainer")
  console.log(x[0]);
  for (let i = 0; i < numCircle; i++) {
    console.log(i);
    x[i] = random(width);
    y[i] = random(height);
    speedX[i] = random(-5, 5);
    speedY[i] = random(-5, 5);
  }
  // x[0] = random(width);
  //x[1]=random(width);
  // y[0]=random(height);
  //y[1]=random(height);
  // speedX[0] =random(-5,5);
  // speedX[1]= random(-5,5);
  //    speedY[0] =random(-5,5);
  //   speedY[1]= random(-5,5);
}

function draw() {
  background(170, 170, 255);

  //drawShapes
  for (let i = 0; i < numCircle; i++) {
    circle(x[i], y[i], radius);
  }
  //ADD SPEEDS
  for (let i = 0; i < numCircle; i++) {
    x[i] += speedX[i];
  }
  for (let i = 0; i < numCircle; i++) {
    y[i] += speedY[i];
  }
  for (let i = 0; i < numCircle; i++) {
    if (x[i] > width - radius / 2 || x[i] < radius / 2) {
      speedX[i] = speedX[i] * -1;
    }
  }

  for (let i = 0; i < numCircle; i++) {
    if (y[i] > height - radius / 2 || y[i] < radius / 2) {
      speedY[i] = speedY[i] * -1;
    }
  }
}
