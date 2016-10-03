circleright=22;
circleleft=22;
circlewidth=30;
circleheight=60;
var theta = 0.0;
var rotationSpeed = 0.001;
function setup() {
  createCanvas(596,600);
}

function draw() {
  background(255);
  
   for(var i1=0;i1<100;i1++){
    fill(0);
    rect(i1*8,0,3,height);
  }
 
  noFill();
  push();
  strokeWeight(5);
  for(var i2=0;i2<circleleft;i2++){
    ellipse(0,300,i2*circlewidth,i2*circleheight);
  }
  pop();
  
  noFill();
  push();
  strokeWeight(5);
  for(var i3=0;i3<circleright;i3++){
    ellipse(600,300,i3*circlewidth,i3*circleheight);
  }
  pop();
  
    noFill();
  for(var i=1;i<=10;i++){
    push();
    translate(300, 600);
    rotate(theta);
    strokeWeight(4);
    beginShape();
    vertex(-40*i,0);
    vertex(0,-40*i);
    vertex(40*i,0);
    vertex(0,40*i);
    endShape(CLOSE);
    pop();
    theta+=rotationSpeed;
  }

    noFill();
  for(var m=1;m<=10;m++){
    push();
    translate(300, 0);
    rotate(theta);
    strokeWeight(4);
    beginShape();
    vertex(-40*m,0);
    vertex(0,-40*m);
    vertex(40*m,0);
    vertex(0,40*m);
    endShape(CLOSE);
    pop();
    theta+=rotationSpeed;
  }


}