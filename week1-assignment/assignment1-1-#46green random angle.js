function setup() {
  createCanvas(600,400);
}

function draw(){
  background(255);
  // while technically correct, consider add assigning the value of x in your loop header
  // like this: for(var x=0; x <=600; x+=6)
  for(var x=0;x<=600;x=x+6){
    stroke(110,210,75);
    line(x,0,x,400);
    
    var y=random(400);
    stroke(110,210,75);
    line(x,y,x+3,y+3);
    line(x+3,y+3,x,y+6);
    
    stroke(255);
    line(x,y+1,x,y+5);
    //consider moving all of this code into your setup function and out of draw.
    // you won't need to call noLoop() then.
    noLoop();
  }

}
