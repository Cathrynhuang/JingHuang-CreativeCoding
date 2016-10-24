function setup() {
  createCanvas(600,400);
}

function draw(){
  clear();
  drawBackground();
  drawMashiMaro(mouseX,mouseY,mouseX/400);
}

function drawMashiMaro(x,y,s) {
  push();
  translate(x,y);
  stroke(0);
  scale(s);
  strokeWeight(4);
  noFill();
  beginShape();
  vertex(-10,-115);
  bezierVertex(-8,-120,8,-120,10,-115);
  bezierVertex(3,-115,12,-155,35,-175);  
  bezierVertex(35,-175,45,-150,30,-112);  
  bezierVertex(30,-112,66,-105,80,-80);
  bezierVertex(80,-80,110,-40,80,0);
  bezierVertex(80,0,65,20,40,5);
  bezierVertex(40,5,18,15,0,15);
  bezierVertex(0,15,-18,15,-40,5);
  bezierVertex(-40,5,-65,20,-80,0);
  bezierVertex(-80,0,-110,-40,-80,-80);
  bezierVertex(-80,-80,-66,-105,-30,-112);
  bezierVertex(-30,-112,-45,-150,-35,-175);
  bezierVertex(-35,-175,-12,-155,-10,-115);
  endShape();
  
  stroke(6);
  line(15,-30,73,-20);
  line(-15,-30,-73,-20);
  fill(0);
  ellipse(0,-5,10,6);
  
  stroke(0);
  strokeWeight(4);
  noFill();
  beginShape();
  vertex(80,0);
  bezierVertex(100,15,93,75,70,80);
  bezierVertex(70,80,55,85,42,78);
  bezierVertex(42,78,35,85,0,85);
  bezierVertex(0,85,-35,85,-42,78);
  bezierVertex(-42,78,-55,85,-70,80);
  bezierVertex(-70,80,-93,75,-90,18);
  bezierVertex(-90,18,-90,6,-80,0);
  endShape();
  line(42,78,54,74);
  line(-42,78,-54,74);
  
  beginShape();
  vertex(30,30);
  bezierVertex(15,60,60,50,70,38);
  endShape();
  
  beginShape();
  vertex(-30,30);
  bezierVertex(-15,60,-60,50,-70,38);
  endShape();
  pop();
}

function drawBackground(){
  fill(253,178,164,100);
  noStroke();
  for(i=0;i<=600;i+=60){
    rect(i,0,90,400);
  }
  rect(0,0,30,400);
}