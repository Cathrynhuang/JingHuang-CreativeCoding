//which albers study is this based on?
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
//what does the variable m represent here in the drawing?
   for(var m=0;m< width/2;m += rectStep){
    noStroke();
    //m max never gets to width since we loop until width/2.  Therefore, your mapping is likely
     //thrown out of proportion
    var lerpAmt = map(m, 0, width, 0, 1.0);
    
    var lerpedCol = lerpColor(colorFrom,colorTo,lerpAmt);    
    fill(lerpedCol);
    rect(m,m,width-2*m,height-2*m);
  }
}

