var colorBegin,colorMiddle,colorEnd;
var rectStep1 = 2;
var rectStep2 = 5;
function setup() {
  createCanvas(600,600);
  noLoop();
}

function draw() {
  background(255);
  colorBegin = color(210,230,65);
  colorMiddle= color(50,140,20);
  colorEnd = color(150,115,30);
  

  for(var x1=0; x1 < width/2; x1 += rectStep1){
    noStroke();
    var lerpAmt1 = map(x1, 0,width/2, 0, 1.0);
    
    var lerpedCol1 = lerpColor(colorBegin,colorMiddle,lerpAmt1);    
    fill(lerpedCol1);
    
    rect(x1,0,rectStep1,height);
  }
    for(var x2=width/2; x2 < width; x2 += rectStep2){
    noStroke();
    var lerpAmt2 = map(x2,width/2,width, 0, 1.0);
    
    var lerpedCol2 = lerpColor(colorMiddle,colorEnd,lerpAmt2);    
    fill(lerpedCol2);
    
    rect(x2,0,rectStep2,height);
}
} 
