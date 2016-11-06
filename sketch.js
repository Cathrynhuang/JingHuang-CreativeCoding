var waveLengthOne = 120.0;
var waveLengthTwo = 68.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 300;

function setup(){
  createCanvas(620,620);
  background(50);
}
function draw(){
  translate(width/2,height/2);
  if(pointCount>10000){
    noLoop();
  }
  colorMode(HSB,360,100,100);
  colorFrom1=color(250,100,100);
  colorTo1=color(300,100,100);
  colorFrom2=color(120,100,100);
  colorTo2=color(200,100,100);
  colorFrom3=color(10,100,100);
  colorTo3=color(60,100,100);
    for(var i=0; i < pointCount; i++){
      angle = i / waveLengthOne * TWO_PI;
      var y = sin(angle)* amplitude;
  
      angle = i / waveLengthTwo * TWO_PI;
      var x = sin(angle)* amplitude;
      
     var lerpAmt1= map(abs(x)*1.2,200,300,0,1.0);
     var Col1= lerpColor(colorFrom1,colorTo1,lerpAmt1);
     var lerpAmt2= map(abs(x)*1.2,100,200,0,1.0);
     var Col2= lerpColor(colorFrom2,colorTo2,lerpAmt2);
     var lerpAmt3= map(abs(x)*1.2,0,100,0,1.0);
     var Col3= lerpColor(colorFrom3,colorTo3,lerpAmt3);
    
      if(abs(x)>=200&&abs(x)<=300||abs(y)>=200&&abs(y)<=300){
        polygon(x,y,3,3,Col1);
      }
      else if(abs(x)>=100&&abs(x)<200||abs(y)>=100&&abs(y)<200){
        polygon(x,y,4,4,Col2);
      }
      else if(abs(x)>=0&&abs(x)<100||abs(y)>=0&&abs(y)<100){
        polygon(x,y,5,5,Col3);
      }
      
    }
pointCount++;
}
function polygon(x, y, radius, npoints,_color) {
  var angle = TWO_PI / npoints;
  noStroke();
  fill(_color);
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}