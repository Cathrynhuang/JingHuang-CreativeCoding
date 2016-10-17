var colorFrom, colorTo;
var rectStep = 1;
function setup() {
  createCanvas(600,600);
  noLoop();
}

function draw() {
  background(255);
  colorFrom = color(70,70,70);
  colorTo = color(255,255,100);

   for(var m=0;m< width/2;m += rectStep){
    noStroke();
    
    var lerpAmt = map(m, 0, width, 0, 1.0);
    
    var lerpedCol = lerpColor(colorFrom,colorTo,lerpAmt);    
    fill(lerpedCol);
    rect(m,m,width-2*m,height-2*m);
  }
}

