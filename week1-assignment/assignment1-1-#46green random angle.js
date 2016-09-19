function setup() {
  createCanvas(600,400);
}

function draw(){
  background(255);
  
  for(var x=0;x<=600;x=x+6){
    stroke(110,210,75);
    line(x,0,x,400);
    
    var y=random(400);
    stroke(110,210,75);
    line(x,y,x+3,y+3);
    line(x+3,y+3,x,y+6);
    
    stroke(255);
    line(x,y+1,x,y+5);
    noLoop();
  }

}
