var flowers;
var backgrounds ;
var character;
var BGMusic;
var score=0;
var snowsystem;
var pedals;
var pedal;
var branchs;
var branch;
var br;
var gameover;
function preload(){
  BGMusic=loadSound("BGM.mp3");
  gameover=loadSound("over.mp3")
  flowers= loadImage("flower5.png");  
  br=loadImage("branch.png");
  backgrounds= loadImage("background2.jpg");
  characters1 = loadImage("hanfu.png");
  characters2 = loadImage("hanfu1.png");
}

var Snow=function(position){
  this.acceleration = createVector(0,0.01);
  this.velocity = createVector(random(-1,1), random(0,1));
  this.position = position.copy();
  this.size=random(1,5);
  this.lifespan=500.0;
}

Snow.prototype.run = function() {
  this.update();
  this.display();
};

Snow.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 1;
};

Snow.prototype.display = function() {
  noStroke();
  strokeWeight(2);
  fill(255,this.lifespan);
  ellipse(this.position.x, this.position.y,this.size,this.size);
};

Snow.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var SnowSystem = function(position) {
  this.origin = position.copy();
  this.snow = [];
};
SnowSystem.prototype.addParticle = function() {

  if (frameCount%5===0){
  this.snow.push(new Snow(this.origin));
  }
};

SnowSystem.prototype.run = function() {
  for (var i = this.snow.length-1; i >= 0; i--) {
    var s = this.snow[i];
  s.run();
    if (s.isDead()) {
      this.snow.splice(i, 1);
    }
  }
};

function setup() {
  createCanvas(500,750);
  BGMusic.play();
  snowsystem = new SnowSystem(createVector(width/2,-100));
  pedals = new Group();
  branchs=new Group();
  character = createSprite(width/2,height);
  character.addImage("right",characters1);
  character.addImage("left",characters2);
}


function draw() {
  background(backgrounds);
  fill(255);
  textSize(15);
  text("score:",10,20);
  snowsystem.addParticle();
  snowsystem.run();

  if (frameCount%30===0){
      pedal = createSprite(random(width/3,width*2/3),-10);
      pedal.addImage(flowers);
      pedal.scale=random(0.5,1.2);
      pedal.velocity = createVector(random(-1,1), random(2,5));
      pedal.rotationSpeed=random(0.1,1);
      pedals.add(pedal);
   }
   
   character.overlap(pedals,getScore);
   pedals.overlap(character,getScore);
   

   if (frameCount%80===0){
      branch = createSprite(random(width/3,width*2/3),-10);
      branch.addImage(br);
      branch.scale=random(0.4,0.7);
      branch.velocity = createVector(random(-1,1), random(2,5));
      branch.rotationSpeed=random(-2,2);
      branchs.add(branch);
   }

   character.overlap(branchs,loseScore);
   branchs.overlap(character,loseScore);
 
  if(mouseX > character.position.x+10){
    character.changeImage("right");
  }
  else if(mouseX < character.position.x-10){
    character.changeImage("left");
  }
  character.velocity.x = (mouseX - character.position.x) * 0.2;
  character.velocity.y = (mouseY - character.position.y) * 0.2; 
  drawSprites();
  
  fill(255);
  textSize(15);
  text(floor(score),50,20);
  
  if (score<0){
    fill(255);
    textSize(30);
    text("GAME OVER",width/2-80,height/2-10);
    gameover.play();
    BGMusic.stop();
    noLoop();
    
  }
}

function getScore(character,pedal) {
  pedal.remove();
  score++;
}

function loseScore(character,branch) {
  branch.remove();
  score-=10;
  fill(255);
  textSize(15);
  text("-10",width/2,20);
}
