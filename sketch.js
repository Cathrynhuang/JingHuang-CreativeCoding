function MashiMaro(posx, posy){
  //this.itsize=1;
  this.strokecolor =50;
  // this.bg=100;
  this.posx = posx;
  this.posy = posy;
}

MashiMaro.prototype.draw = function(){
  push();
  translate(this.posx,this.posy);
  scale(0.6);
  colorFrom = color(242,251,138);
  colorTo = color(141,45,218);
  var lerpAmt = map(this.strokecolor,0,100,0,1.0);
  var lerpedCol = lerpColor(colorFrom,colorTo,lerpAmt); 
  stroke(lerpedCol);
  strokeWeight(4);
  noFill();
  beginShape();
  vertex(-10,-115);
  bezierVertex(-8,-120,8,-120,10,-115);
  bezierVertex(3,-115,12,-155,35,-175);  
  bezierVertex(35,-175,45,-150,30,-112);  
  bezierVertex(30,-112,66,-105,80,-80);
  bezierVertex(80,-80,110,-40,80,0);
  bezierVertex(80,0,65,20,40,5);
  bezierVertex(40,5,18,15,0,15);
  bezierVertex(0,15,-18,15,-40,5);
  bezierVertex(-40,5,-65,20,-80,0);
  bezierVertex(-80,0,-110,-40,-80,-80);
  bezierVertex(-80,-80,-66,-105,-30,-112);
  bezierVertex(-30,-112,-45,-150,-35,-175);
  bezierVertex(-35,-175,-12,-155,-10,-115);
  endShape();
  
  stroke(lerpedCol);
  line(15,-30,73,-20);
  line(-15,-30,-73,-20);
  noFill();
  ellipse(0,-5,10,6);
  
  stroke(lerpedCol);
  strokeWeight(4);
  noFill();
  beginShape();
  vertex(80,0);
  bezierVertex(100,15,93,75,70,80);
  bezierVertex(70,80,55,85,42,78);
  bezierVertex(42,78,35,85,0,85);
  bezierVertex(0,85,-35,85,-42,78);
  bezierVertex(-42,78,-55,85,-70,80);
  bezierVertex(-70,80,-93,75,-90,18);
  bezierVertex(-90,18,-90,6,-80,0);
  endShape();
  line(42,78,54,74);
  line(-42,78,-54,74);
  
  beginShape();
  vertex(30,30);
  bezierVertex(15,60,60,50,70,38);
  endShape();
  
  beginShape();
  vertex(-30,30);
  bezierVertex(-15,60,-60,50,-70,38);
  endShape();
  pop();
};

var MashiMaros = [];
var itsize;
var bg;

function setup(){
  createCanvas(1000,800);
  //create your div
  var myName1 = createDiv("Size");
  myName1.position(windowWidth/5,40);
  var myName2 = createDiv("Stroke Color");
  myName2.position(windowWidth/5,60);
  var myName3 = createDiv("Background Color");
  myName3.position(windowWidth/5,80);
  var mySlider1 = createSlider(1,10,5);
  var mySlider2 = createSlider(0,255,0);
  var mySlider3 = createSlider(50,255,255);
  var myBtn = createButton("Draw a MashiMaro");
  myBtn.position(windowWidth/5,130);
  myBtn.mouseClicked(function(){
    clear();
    
    MashiMaros.push(new MashiMaro(random(windowWidth/5,windowWidth*4/5), random(windowHeight/5,windowHeight*4/5)));
  });
  //then position it

  mySlider1.position(windowWidth/4+100,40);
  mySlider2.position(windowWidth/4+100,60);
  mySlider3.position(windowWidth/4+100,80);
  mySlider1.changed(Size);
  mySlider2.changed(Strokecolor);
  mySlider3.changed(BackgroundColor);

}

var bg=255;

function draw(){
  
  background(bg);
  
  for(var i=0; i < MashiMaros.length; i++){
    scale(MashiMaros[i].itsize);
    MashiMaros[i].draw();
  }
}

function Size(){
  for(var i=0; i < MashiMaros.length; i++){
    MashiMaros[i].itsize = this.value()/5;
  }
}

function Strokecolor(){
   for(var i=0; i < MashiMaros.length; i++){
    MashiMaros[i].strokecolor = this.value();
  }
}

function BackgroundColor(){
   bg = this.value();
}