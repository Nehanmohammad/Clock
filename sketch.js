let c = 0;
let a = -10;
let b = 0;

function setup(){
  createCanvas (windowWidth,windowHeight)
  angleMode ("DEGREES")
}

function draw(){
  background (0)

  
  stroke (255)
  strokeWeight (10)
  ellipse(600,200,300)
  translate (600,200)
  rotate(235)
  rotate (a);
  stroke  (255) 
  strokeWeight(6)
  line (0,0,50,50)

  
  rotate(c)
  rotate(0)
  strokeWeight(4)
  line (0,0,95,95)

  rotate(b)
  rotate(0)
  strokeWeight(3)
  line (0,0,95,95)
 
  a = a + 0.01
  c = c + 0.1
  b = b + 3
}