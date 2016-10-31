
var num=0;
function setup() {
  createCanvas(600,600);
  frameRate(10);
  background(247,224,129);
}

function draw() {
  translate(width/2,height/2);
  colorFrom = color(242,251,138);
  colorTo = color(141,45,218);
  var lerpAmt = map(num,0,55,0,1.0);
  var lerpedCol = lerpColor(colorFrom,colorTo,lerpAmt); 
  rotate(radians(frameCount%360));
  
  push();
  rotate(radians(10*num));
  polygon(0,0,300-num*5,8,lerpedCol); 
  pop();

  num++;
  if(num===55){
      noLoop();
    }
  }

function polygon(x,y,radius,npoints,_color) {
  var angle = TWO_PI/npoints;
  fill(_color);
  stroke(_color);
  beginShape();
  for (var a=0;a<TWO_PI;a+=angle) {
    var px=x+cos(a)*radius;
    var py=y+sin(a)*radius;
    vertex(px,py);
  }
  endShape(CLOSE);
}
