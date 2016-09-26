var x1=400;
var y1=1.25*x1-109.375;
var x2=200;
var y2=1.25*x2;
var x3=278;
var y3=-0.8*x3+262.4;
var x4=x3+10;
var y4=1.25*x4-109.375;
var x5=318;
var y5=-0.8*x5+820;
var x6=370;
var y6=-0.8*x6+650;
var x7=x5-38.3;
var y7=-0.8*x7+820;
var x8=104.88;
var y8=-0.8*x8+650;
var x9=86+x8/2;
var y9=325+y8/2;
function setup() {
  createCanvas(400,650);
  background(177,200,160);
}

function draw() {
  noStroke();
  fill(26,20,22);
  triangle(0,0,400,0,400,500);

  noStroke();
  fill(65,43,35);
  triangle(0,0,0,70,87.5,0);
  
  noStroke();
  fill(132,51,34);
  triangle(87.5,0,400,0,x1,y1);
  
  stroke(193,118,118);
  fill(193,118,118);
  triangle(x2,y2,x1,-0.8*x1+410,400,500);
  
  noStroke();
  fill(139,156,187);
  beginShape();
  vertex(x1,-0.8*x1+410);
  vertex(328,0);
  vertex(x3,y3);
  vertex(350,-0.8*350+410);
  endShape(CLOSE);
  
  noStroke();
  fill(187,102,97);
  beginShape();
  vertex(x6,y6);
  vertex(x1,y1);
  vertex(400,650);
  vertex(0,650);
  endShape(CLOSE);
  
  noStroke();
  fill(139,156,187);
  beginShape();
  vertex(x4,y4);
  vertex(x1,y1);
  vertex(400,500);
  vertex(x5,y5);
  vertex(154,1.25*154+168.1);
  endShape(CLOSE);
  
  noStroke();
  fill(203,155,141);
  beginShape();
  vertex(x6,y6);
  vertex(x1,y1);
  vertex(400,500);
  vertex(x5,y5);
  vertex(235,1.25*235+168.1);
  endShape(CLOSE);
  
  noStroke();
  fill(173,68,53);
  beginShape();
  vertex(183,1.25*183+168.1);
  vertex(x5,y5);
  vertex(x7,y7);
  vertex(183-38.3,y7-y5+1.25*183+168.1);
  endShape(CLOSE);
  
  noStroke();
  fill(58,38,30);
  beginShape();
  vertex(400,500);
  vertex(x7,y7);
  vertex(322.708,650);
  vertex(400,650);
  endShape(CLOSE);
  
  noStroke();
  fill(36,34,35);
  triangle(0,510,0,650,112,650);
  
  noStroke();
  fill(124,151,182);
  triangle(0,650,x8,y8,172,650);
  
  noStroke();
  fill(95,25,20);
  triangle(86,650,x9,y9,172,650);
}
