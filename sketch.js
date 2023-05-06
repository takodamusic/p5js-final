//click to draw spots 
//takoda barraza
//final assignment 
//thank you for the year, appreciated the class

let brushType = 0;
let paletteIndex = 0;
let angle = 0.0;

//spot colors
let color1 = "#ffb3dd"; //pink1
let color2 = "#fff099"; //yellow
let color3 = "#99ddff"; //blue
let color4 = "#ddb3ff"; //purple

function setup() {
  createCanvas(400, 400);
  background(20);

  noStroke();

  color1 = color(color1);
  color2 = color(color2);
}

function draw() {
  let distanceFromPrevious = dist(mouseX, mouseY, pmouseX, pmouseY);
  let brushSize = distanceFromPrevious;

  if (mouseIsPressed) {
    if (brushType == 0) {
      randomBrush(mouseX, mouseY, 50);
    } else {
      secondBrush(mouseX, mouseY, brushSize);
    }
  }
}

function secondBrush(x, y, size) {
  var nX = width * noise(255);
  var nY = height * noise(255);

  noStroke();
  bezier(mouseX, mouseY, 120, 120, nX, nY, nX, nY);
}

function randomBrush(x, y, size) {
  ellipse(random(x), y, size);
  circle(width - x, random(y), size);
}
//random function
function pickRandomColor() {
  let randomIndex = random(0, 4);
  randomIndex = floor(randomIndex);

  if (randomIndex == 0) {
    fill(color1);
    stroke(color1);
  } else if (randomIndex == 1) {
    fill(color2);
    stroke(color2);
  } else if (randomIndex == 2) {
    fill(color3);
    stroke(color3);
  } else {
    fill(color4);
    stroke(color4);
  }
}

function mousePressed() {
  pickRandomColor();
}
