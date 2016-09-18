function setup() {
  createCanvas(600,400);
}

function draw(){
  background(255);
  
  for(var x=0;x<=600;x=x+10){
    stroke(110,210,75);
    line(x,0,x,400);
    
    var y=random(390);
    stroke(110,210,75);
    line(x,y,x+5,y+5);
    line(x+5,y+5,x,y+10);
    
    stroke(255);
    line(x,y+1,x,y+9);
    noLoop();
  }

}
