function setup() {
  createCanvas(401,401);
}

function draw(){
  background(255);
  
  for(var x=0;x<=400;x=x+10){
    stroke(110,210,75);
    line(x,0,x,400);
  }
  
  for(var y=0;y<=400;y=y+10){
    stroke(250,240,60);
    if(y<200){
      line(200,y,400,y);
    }
    else
    {
      line(0,y,400,y);
    }
  }
  
  for(var r=10;r<=600;r=r+10){
    stroke(255,0,0);
    line(r,200,0,200+r);
  }
  for(var b=10;b<=200;b=b+10){
    stroke(30,0,160);
    line(200,400-b,200+b,400);
  }
  for(var q=10;q<=200;q=q+10){
    stroke(30,0,160);
    line(200+q,200,400,400-q);
  }
}
