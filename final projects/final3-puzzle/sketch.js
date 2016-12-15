var ladiescomplete;
var ladies1;
var ladies2;
var ladies3;
var ladies4;
var ladies5;
var ladies6;
var ladies7;
var ladies8;
var ladies9;
var puzzle1;
var puzzle2;
var puzzle3;
var puzzle4;
var puzzle5;
var puzzle6;
var puzzle7;
var puzzle8;
var puzzle9;
var p1,p2,p3,p4,p5,p6,p7,p8,p9;

function preload(){
  ladies1=loadImage("ladies1.png");
  ladies2=loadImage("ladies2.png");
  ladies3=loadImage("ladies3.png");
  ladies4=loadImage("ladies4.png");
  ladies5=loadImage("ladies5.png");
  ladies6=loadImage("ladies6.png");
  ladies7=loadImage("ladies7.png");
  ladies8=loadImage("ladies8.png");
  ladies9=loadImage("ladies9.png");
}
function setup() {
  createCanvas(1188,600);

  p1=createSprite(99,89,198,178);
  p1.shapeColor = color(random(100,255));
  p2=createSprite(99*3,89,198,178);
  p2.shapeColor = color(random(100,255));
  p3=createSprite(99*5,89,198,178);
  p3.shapeColor = color(random(100,255));
  p4=createSprite(99,89*3,198,178);
  p4.shapeColor = color(random(100,255));
  p5=createSprite(99*3,89*3,198,178);
  p5.shapeColor = color(random(100,255));
  p6=createSprite(99*5,89*3,198,178);
  p6.shapeColor = color(random(100,255));
  p7=createSprite(99,89*5,198,178);
  p7.shapeColor = color(random(100,255));
  p8=createSprite(99*3,89*5,198,178);
  p8.shapeColor = color(random(100,255));
  p9=createSprite(99*5,89*5,198,178);
  p9.shapeColor = color(random(100,255));
  
  puzzle1=createSprite(random(198*3.5,198*5.5),random(178*1,178*2));
  puzzle1.addImage(ladies1);
  puzzle1.scale=2/3;
  
  puzzle2=createSprite(random(198*3.5,198*5.5),random(178*1,178*2));
  puzzle2.addImage(ladies2);
  puzzle2.scale=2/3;
  
  puzzle3=createSprite(random(198*3.5,198*5.5),random(178*1,178*2));
  puzzle3.addImage(ladies3);
  puzzle3.scale=2/3;
  
  puzzle4=createSprite(random(198*3.5,198*5.5),random(178*1,178*2));
  puzzle4.addImage(ladies4);
  puzzle4.scale=2/3;
  
  puzzle5=createSprite(random(198*3.5,198*5.5),random(178*1,178*2.5));
  puzzle5.addImage(ladies5);
  puzzle5.scale=2/3;
  
  puzzle6=createSprite(random(198*3.5,198*5.5),random(178*1,178*2.5));
  puzzle6.addImage(ladies6);
  puzzle6.scale=2/3;
  
  puzzle7=createSprite(random(198*3.5,198*5.5),random(178*1,178*2.5));
  puzzle7.addImage(ladies7);
  puzzle7.scale=2/3;
  
  puzzle8=createSprite(random(198*4,198*5.5),random(178*1,178*3));
  puzzle8.addImage(ladies8);
  puzzle8.scale=2/3;
  
  puzzle9=createSprite(random(198*4,198*5.5),random(178*1,178*3));
  puzzle9.addImage(ladies9);
  puzzle9.scale=2/3;
  
  // puzzle1.collide(puzzle2);
  // puzzle1.collide(puzzle3);
  // puzzle1.collide(puzzle4);
  // puzzle1.collide(puzzle5);
  // puzzle1.collide(puzzle6);
  // puzzle1.collide(puzzle7);
  // puzzle1.collide(puzzle8);
  // puzzle1.collide(puzzle9);
  
  // puzzle2.collide(puzzle1);
  // puzzle2.collide(puzzle3);
  // puzzle2.collide(puzzle4);
  // puzzle2.collide(puzzle5);
  // puzzle2.collide(puzzle6);
  // puzzle2.collide(puzzle7);
  // puzzle2.collide(puzzle8);
  // puzzle2.collide(puzzle9);
  
  // puzzle3.collide(puzzle1);
  // puzzle3.collide(puzzle2);
  // puzzle3.collide(puzzle4);
  // puzzle3.collide(puzzle5);
  // puzzle3.collide(puzzle6);
  // puzzle3.collide(puzzle7);
  // puzzle3.collide(puzzle8);
  // puzzle3.collide(puzzle9);
  
  // puzzle4.collide(puzzle1);
  // puzzle4.collide(puzzle2);
  // puzzle4.collide(puzzle3);
  // puzzle4.collide(puzzle5);
  // puzzle4.collide(puzzle6);
  // puzzle4.collide(puzzle7);
  // puzzle4.collide(puzzle8);
  // puzzle4.collide(puzzle9);
  
  // puzzle5.collide(puzzle2);
  // puzzle5.collide(puzzle3);
  // puzzle5.collide(puzzle4);
  // puzzle5.collide(puzzle1);
  // puzzle5.collide(puzzle6);
  // puzzle5.collide(puzzle7);
  // puzzle5.collide(puzzle8);
  // puzzle5.collide(puzzle9);
  
  // puzzle6.collide(puzzle1);
  // puzzle6.collide(puzzle2);
  // puzzle6.collide(puzzle4);
  // puzzle6.collide(puzzle5);
  // puzzle6.collide(puzzle3);
  // puzzle6.collide(puzzle7);
  // puzzle6.collide(puzzle8);
  // puzzle6.collide(puzzle9);
  
  // puzzle7.collide(puzzle1);
  // puzzle7.collide(puzzle2);
  // puzzle7.collide(puzzle4);
  // puzzle7.collide(puzzle5);
  // puzzle7.collide(puzzle3);
  // puzzle7.collide(puzzle6);
  // puzzle7.collide(puzzle8);
  // puzzle7.collide(puzzle9);
  
  // puzzle8.collide(puzzle1);
  // puzzle8.collide(puzzle2);
  // puzzle8.collide(puzzle4);
  // puzzle8.collide(puzzle5);
  // puzzle8.collide(puzzle3);
  // puzzle8.collide(puzzle6);
  // puzzle8.collide(puzzle7);
  // puzzle8.collide(puzzle9);
  
  // puzzle9.collide(puzzle1);
  // puzzle9.collide(puzzle2);
  // puzzle9.collide(puzzle4);
  // puzzle9.collide(puzzle5);
  // puzzle9.collide(puzzle3);
  // puzzle9.collide(puzzle6);
  // puzzle9.collide(puzzle7);
  // puzzle9.collide(puzzle9);
}

function draw() {
  
  
  background(208,188,148);
  fill(255);
  textSize(15);
  text("Click the pictures to play the puzzle game: click left part of picture to move it to the left,etc.",10,560);
  text("Be careful: do not click the overlap parts of pictures.",10,580);
  textSize(40);
  text("PUZZLE GAME",750,60);
  textSize(15);
  text("Traditional Chinese Painting (Group portrait of Noblewomen)",690,80);
 
  puzzle1.onMousePressed = function() {
  if((puzzle1.position.x !==puzzle6.position.x && puzzle1.position.y !==puzzle6.position.y) || 
      (puzzle1.position.x !==puzzle2.position.x && puzzle1.position.y !==puzzle2.position.y) ||
      (puzzle1.position.x !==puzzle3.position.x && puzzle1.position.y !==puzzle3.position.y) ||
      (puzzle1.position.x !==puzzle4.position.x && puzzle1.position.y !==puzzle4.position.y) ||
      (puzzle1.position.x !==puzzle5.position.x && puzzle1.position.y !==puzzle5.position.y) ||
      (puzzle1.position.x !==puzzle7.position.x && puzzle1.position.y !==puzzle7.position.y) ||
      (puzzle1.position.x !==puzzle8.position.x && puzzle1.position.y !==puzzle8.position.y) ||
      (puzzle1.position.x !==puzzle9.position.x && puzzle1.position.y !==puzzle9.position.y) ){
      puzzle1.position.x=mouseX;
      puzzle1.position.y=mouseY;
      }
    if(puzzle1.position.x<198*3 && puzzle1.position.y<178*3){
    if(puzzle1.position.x<198-50 && puzzle1.position.y<178-50){
      puzzle1.position.x=99;
      puzzle1.position.y=89;
    }
    else if(puzzle1.position.x>198+50 && puzzle1.position.x<198*2-50 && puzzle1.position.y<178-50){
      puzzle1.position.x=99*3;
      puzzle1.position.y=89;
    }
    else if(puzzle1.position.x>198*2+50 && puzzle1.position.y<178-50){
      puzzle1.position.x=99*5;
      puzzle1.position.y=89;
    }
    else if(puzzle1.position.x<198-50 && puzzle1.position.y<178*2-50 && puzzle1.position.y>178+50){
      puzzle1.position.x=99;
      puzzle1.position.y=89*3;
    }
    else if(puzzle1.position.x<198*2-50 && puzzle1.position.x>198+50 && puzzle1.position.y<178*2-50 && puzzle1.position.y>178+50){
      puzzle1.position.x=99*3;
      puzzle1.position.y=89*3;
    }
    else if(puzzle1.position.x>198*2+50 && puzzle1.position.y<178*2-50 && puzzle1.position.y>178+50){
      puzzle1.position.x=99*5;
      puzzle1.position.y=89*3;
    }
    else if(puzzle1.position.x<198-50 && puzzle1.position.y>178*2+50){
      puzzle1.position.x=99;
      puzzle1.position.y=89*5;
    }
    else if(puzzle1.position.x>198+50 &&puzzle1.position.x<198*2-50 && puzzle1.position.y>178*2+50){
      puzzle1.position.x=99*3;
      puzzle1.position.y=89*5;
    }
    else if(puzzle1.position.x>198*2+50 && puzzle1.position.y>178*2+50){
      puzzle1.position.x=99*5;
      puzzle1.position.y=89*5;
    }
    
  }
  }
  
  puzzle2.onMousePressed=function() {
    if((puzzle2.position.x !==puzzle1.position.x && puzzle2.position.y !==puzzle1.position.y) || 
      (puzzle2.position.x !==puzzle6.position.x && puzzle2.position.y !==puzzle6.position.y) ||
      (puzzle2.position.x !==puzzle3.position.x && puzzle2.position.y !==puzzle3.position.y) ||
      (puzzle2.position.x !==puzzle4.position.x && puzzle2.position.y !==puzzle4.position.y) ||
      (puzzle2.position.x !==puzzle5.position.x && puzzle2.position.y !==puzzle5.position.y) ||
      (puzzle2.position.x !==puzzle7.position.x && puzzle2.position.y !==puzzle7.position.y) ||
      (puzzle2.position.x !==puzzle8.position.x && puzzle2.position.y !==puzzle8.position.y) ||
      (puzzle2.position.x !==puzzle9.position.x && puzzle2.position.y !==puzzle9.position.y) ){
      puzzle2.position.x=mouseX;
      puzzle2.position.y=mouseY;
      }
      if(puzzle2.position.x<198*3 && puzzle2.position.y<178*3){
    if(puzzle2.position.x<198-50 && puzzle2.position.y<178-50){
      puzzle2.position.x=99;
      puzzle2.position.y=89;
    }
    else if(puzzle2.position.x>198+50 && puzzle2.position.x<198*2-50 && puzzle2.position.y<178-50){
      puzzle2.position.x=99*3;
      puzzle2.position.y=89;
    }
    else if(puzzle2.position.x>198*2+50 && puzzle2.position.y<178-50){
      puzzle2.position.x=99*5;
      puzzle2.position.y=89;
    }
    else if(puzzle2.position.x<198-50 && puzzle2.position.y<178*2-50 && puzzle2.position.y>178+50){
      puzzle2.position.x=99;
      puzzle2.position.y=89*3;
    }
    else if(puzzle2.position.x<198*2-50 && puzzle2.position.x>198+50 && puzzle2.position.y<178*2-50 && puzzle2.position.y>178+50){
      puzzle2.position.x=99*3;
      puzzle2.position.y=89*3;
    }
    else if(puzzle2.position.x>198*2+50 && puzzle2.position.y<178*2-50 && puzzle2.position.y>178+50){
      puzzle2.position.x=99*5;
      puzzle2.position.y=89*3;
    }
    else if(puzzle2.position.x<198-50 && puzzle2.position.y>178*2+50){
      puzzle2.position.x=99;
      puzzle2.position.y=89*5;
    }
    else if(puzzle2.position.x>198+50 &&puzzle2.position.x<198*2-50 && puzzle2.position.y>178*2+50){
      puzzle2.position.x=99*3;
      puzzle2.position.y=89*5;
    }
    else if(puzzle2.position.x>198*2+50 && puzzle2.position.y>178*2+50){
      puzzle2.position.x=99*5;
      puzzle2.position.y=89*5;
    }
  }
  }
  
  puzzle3.onMousePressed = function() {
    if((puzzle3.position.x !==puzzle1.position.x && puzzle3.position.y !==puzzle1.position.y) || 
      (puzzle3.position.x !==puzzle2.position.x && puzzle3.position.y !==puzzle2.position.y) ||
      (puzzle3.position.x !==puzzle6.position.x && puzzle3.position.y !==puzzle6.position.y) ||
      (puzzle3.position.x !==puzzle4.position.x && puzzle3.position.y !==puzzle4.position.y) ||
      (puzzle3.position.x !==puzzle5.position.x && puzzle3.position.y !==puzzle5.position.y) ||
      (puzzle3.position.x !==puzzle7.position.x && puzzle3.position.y !==puzzle7.position.y) ||
      (puzzle3.position.x !==puzzle8.position.x && puzzle3.position.y !==puzzle8.position.y) ||
      (puzzle3.position.x !==puzzle9.position.x && puzzle3.position.y !==puzzle9.position.y) ){
      puzzle3.position.x=mouseX;
      puzzle3.position.y=mouseY;
      }
    if(puzzle3.position.x<198*3 && puzzle3.position.y<178*3){
    if(puzzle3.position.x<198-50 && puzzle3.position.y<178-50){
      puzzle3.position.x=99;
      puzzle3.position.y=89;
    }
    else if(puzzle3.position.x>198+50 && puzzle3.position.x<198*2-50 && puzzle3.position.y<178-50){
      puzzle3.position.x=99*3;
      puzzle3.position.y=89;
    }
    else if(puzzle3.position.x>198*2+50 && puzzle3.position.y<178-50){
      puzzle3.position.x=99*5;
      puzzle3.position.y=89;
    }
    else if(puzzle3.position.x<198-50 && puzzle3.position.y<178*2-50 && puzzle3.position.y>178+50){
      puzzle3.position.x=99;
      puzzle3.position.y=89*3;
    }
    else if(puzzle3.position.x<198*2-50 && puzzle3.position.x>198+50 && puzzle3.position.y<178*2-50 && puzzle3.position.y>178+50){
      puzzle3.position.x=99*3;
      puzzle3.position.y=89*3;
    }
    else if(puzzle3.position.x>198*2+50 && puzzle3.position.y<178*2-50 && puzzle3.position.y>178+50){
      puzzle3.position.x=99*5;
      puzzle3.position.y=89*3;
    }
    else if(puzzle3.position.x<198-50 && puzzle3.position.y>178*2+50){
      puzzle3.position.x=99;
      puzzle3.position.y=89*5;
    }
    else if(puzzle3.position.x>198+50 &&puzzle3.position.x<198*2-50 && puzzle3.position.y>178*2+50){
      puzzle3.position.x=99*3;
      puzzle3.position.y=89*5;
    }
    else if(puzzle3.position.x>198*2+50 && puzzle3.position.y>178*2+50){
      puzzle3.position.x=99*5;
      puzzle3.position.y=89*5;
    }
  }
  }
  
  puzzle4.onMousePressed = function() {
    if((puzzle4.position.x !==puzzle1.position.x && puzzle4.position.y !==puzzle1.position.y) || 
      (puzzle4.position.x !==puzzle2.position.x && puzzle4.position.y !==puzzle2.position.y) ||
      (puzzle4.position.x !==puzzle3.position.x && puzzle4.position.y !==puzzle3.position.y) ||
      (puzzle4.position.x !==puzzle6.position.x && puzzle4.position.y !==puzzle6.position.y) ||
      (puzzle4.position.x !==puzzle5.position.x && puzzle4.position.y !==puzzle5.position.y) ||
      (puzzle4.position.x !==puzzle7.position.x && puzzle4.position.y !==puzzle7.position.y) ||
      (puzzle4.position.x !==puzzle8.position.x && puzzle4.position.y !==puzzle8.position.y) ||
      (puzzle4.position.x !==puzzle9.position.x && puzzle4.position.y !==puzzle9.position.y) ){
        puzzle4.position.x=mouseX;
        puzzle4.position.y=mouseY;
      }
    if(puzzle4.position.x<198*3 && puzzle4.position.y<178*3){
    if(puzzle4.position.x<198-50 && puzzle4.position.y<178-50){
      puzzle4.position.x=99;
      puzzle4.position.y=89;
    }
    else if(puzzle4.position.x>198+50 && puzzle4.position.x<198*2-50 && puzzle4.position.y<178-50){
      puzzle4.position.x=99*3;
      puzzle4.position.y=89;
    }
    else if(puzzle4.position.x>198*2+50 && puzzle4.position.y<178-50){
      puzzle4.position.x=99*5;
      puzzle4.position.y=89;
    }
    else if(puzzle4.position.x<198-50 && puzzle4.position.y<178*2-50 && puzzle4.position.y>178+50){
      puzzle4.position.x=99;
      puzzle4.position.y=89*3;
    }
    else if(puzzle4.position.x<198*2-50 && puzzle4.position.x>198+50 && puzzle4.position.y<178*2-50 && puzzle4.position.y>178+50){
      puzzle4.position.x=99*3;
      puzzle4.position.y=89*3;
    }
    else if(puzzle4.position.x>198*2+50 && puzzle4.position.y<178*2-50 && puzzle4.position.y>178+50){
      puzzle4.position.x=99*5;
      puzzle4.position.y=89*3;
    }
    else if(puzzle4.position.x<198-50 && puzzle4.position.y>178*2+50){
      puzzle4.position.x=99;
      puzzle4.position.y=89*5;
    }
    else if(puzzle4.position.x>198+50 &&puzzle4.position.x<198*2-50 && puzzle4.position.y>178*2+50){
      puzzle4.position.x=99*3;
      puzzle4.position.y=89*5;
    }
    else if(puzzle4.position.x>198*2+50 && puzzle4.position.y>178*2+50){
      puzzle4.position.x=99*5;
      puzzle4.position.y=89*5;
    }
  }
  }
  
  puzzle5.onMousePressed = function() {
 
    if((puzzle5.position.x !==puzzle1.position.x && puzzle5.position.y !==puzzle1.position.y) || 
      (puzzle5.position.x !==puzzle2.position.x && puzzle5.position.y !==puzzle2.position.y) ||
      (puzzle5.position.x !==puzzle3.position.x && puzzle5.position.y !==puzzle3.position.y) ||
      (puzzle5.position.x !==puzzle4.position.x && puzzle5.position.y !==puzzle4.position.y) ||
      (puzzle5.position.x !==puzzle6.position.x && puzzle5.position.y !==puzzle6.position.y) ||
      (puzzle5.position.x !==puzzle7.position.x && puzzle5.position.y !==puzzle7.position.y) ||
      (puzzle5.position.x !==puzzle8.position.x && puzzle5.position.y !==puzzle8.position.y) ||
      (puzzle5.position.x !==puzzle9.position.x && puzzle5.position.y !==puzzle9.position.y) ){
      puzzle5.position.x=mouseX;
      puzzle5.position.y=mouseY;
      }
    if(puzzle5.position.x<198*3 && puzzle5.position.y<178*3){
    if(puzzle5.position.x<198-50 && puzzle5.position.y<178-50){
      puzzle5.position.x=99;
      puzzle5.position.y=89;
    }
    else if(puzzle5.position.x>198+50 && puzzle5.position.x<198*2-50 && puzzle5.position.y<178-50){
      puzzle5.position.x=99*3;
      puzzle5.position.y=89;
    }
    else if(puzzle5.position.x>198*2+50 && puzzle5.position.y<178-50){
      puzzle5.position.x=99*5;
      puzzle5.position.y=89;
    }
    else if(puzzle5.position.x<198-50 && puzzle5.position.y<178*2-50 && puzzle5.position.y>178+50){
      puzzle5.position.x=99;
      puzzle5.position.y=89*3;
    }
    else if(puzzle5.position.x<198*2-50 && puzzle5.position.x>198+50 && puzzle5.position.y<178*2-50 && puzzle5.position.y>178+50){
      puzzle5.position.x=99*3;
      puzzle5.position.y=89*3;
    }
    else if(puzzle5.position.x>198*2+50 && puzzle5.position.y<178*2-50 && puzzle5.position.y>178+50){
      puzzle5.position.x=99*5;
      puzzle5.position.y=89*3;
    }
    else if(puzzle5.position.x<198-50 && puzzle5.position.y>178*2+50){
      puzzle5.position.x=99;
      puzzle5.position.y=89*5;
    }
    else if(puzzle5.position.x>198+50 &&puzzle5.position.x<198*2-50 && puzzle5.position.y>178*2+50){
      puzzle5.position.x=99*3;
      puzzle5.position.y=89*5;
    }
    else if(puzzle5.position.x>198*2+50 && puzzle5.position.y>178*2+50){
      puzzle5.position.x=99*5;
      puzzle5.position.y=89*5;
    }
  }
  }
  
  puzzle6.onMousePressed = function() {
    
    if((puzzle6.position.x !==puzzle1.position.x && puzzle6.position.y !==puzzle1.position.y) || 
      (puzzle6.position.x !==puzzle2.position.x && puzzle6.position.y !==puzzle2.position.y) ||
      (puzzle6.position.x !==puzzle3.position.x && puzzle6.position.y !==puzzle3.position.y) ||
      (puzzle6.position.x !==puzzle4.position.x && puzzle6.position.y !==puzzle4.position.y) ||
      (puzzle6.position.x !==puzzle5.position.x && puzzle6.position.y !==puzzle5.position.y) ||
      (puzzle6.position.x !==puzzle7.position.x && puzzle6.position.y !==puzzle7.position.y) ||
      (puzzle6.position.x !==puzzle8.position.x && puzzle6.position.y !==puzzle8.position.y) ||
      (puzzle6.position.x !==puzzle9.position.x && puzzle6.position.y !==puzzle9.position.y) ){
      puzzle6.position.x=mouseX;
      puzzle6.position.y=mouseY;
      }
    if(puzzle6.position.x<198*3 && puzzle6.position.y<178*3){
    if(puzzle6.position.x<198-50 && puzzle6.position.y<178-50){
      puzzle6.position.x=99;
      puzzle6.position.y=89;
    }
    else if(puzzle6.position.x>198+50 && puzzle6.position.x<198*2-50 && puzzle6.position.y<178-50){
      puzzle6.position.x=99*3;
      puzzle6.position.y=89;
    }
    else if(puzzle6.position.x>198*2+50 && puzzle6.position.y<178-50){
      puzzle6.position.x=99*5;
      puzzle6.position.y=89;
    }
    else if(puzzle6.position.x<198-50 && puzzle6.position.y<178*2-50 && puzzle6.position.y>178+50){
      puzzle6.position.x=99;
      puzzle6.position.y=89*3;
    }
    else if(puzzle6.position.x<198*2-50 && puzzle6.position.x>198+50 && puzzle6.position.y<178*2-50 && puzzle6.position.y>178+50){
      puzzle6.position.x=99*3;
      puzzle6.position.y=89*3;
    }
    else if(puzzle6.position.x>198*2+50 && puzzle6.position.y<178*2-50 && puzzle6.position.y>178+50){
      puzzle6.position.x=99*5;
      puzzle6.position.y=89*3;
    }
    else if(puzzle6.position.x<198-50 && puzzle6.position.y>178*2+50){
      puzzle6.position.x=99;
      puzzle6.position.y=89*5;
    }
    else if(puzzle6.position.x>198+50 &&puzzle6.position.x<198*2-50 && puzzle6.position.y>178*2+50){
      puzzle6.position.x=99*3;
      puzzle6.position.y=89*5;
    }
    else if(puzzle6.position.x>198*2+50 && puzzle6.position.y>178*2+50){
      puzzle6.position.x=99*5;
      puzzle6.position.y=89*5;
    }
  }
  }
  
  puzzle7.onMousePressed = function() {

    if((puzzle7.position.x !==puzzle1.position.x && puzzle7.position.y !==puzzle1.position.y) || 
      (puzzle7.position.x !==puzzle2.position.x && puzzle7.position.y !==puzzle2.position.y) ||
      (puzzle7.position.x !==puzzle3.position.x && puzzle7.position.y !==puzzle3.position.y) ||
      (puzzle7.position.x !==puzzle4.position.x && puzzle7.position.y !==puzzle4.position.y) ||
      (puzzle7.position.x !==puzzle5.position.x && puzzle7.position.y !==puzzle5.position.y) ||
      (puzzle7.position.x !==puzzle6.position.x && puzzle7.position.y !==puzzle6.position.y) ||
      (puzzle7.position.x !==puzzle8.position.x && puzzle7.position.y !==puzzle8.position.y) ||
      (puzzle7.position.x !==puzzle9.position.x && puzzle7.position.y !==puzzle9.position.y) ){
      puzzle7.position.x=mouseX;
      puzzle7.position.y=mouseY;
      }
    if(puzzle7.position.x<198*3 && puzzle7.position.y<178*3){
    if(puzzle7.position.x<198-50 && puzzle7.position.y<178-50){
      puzzle7.position.x=99;
      puzzle7.position.y=89;
    }
    else if(puzzle7.position.x>198+50 && puzzle7.position.x<198*2-50 && puzzle7.position.y<178-50){
      puzzle7.position.x=99*3;
      puzzle7.position.y=89;
    }
    else if(puzzle7.position.x>198*2+50 && puzzle7.position.y<178-50){
      puzzle7.position.x=99*5;
      puzzle7.position.y=89;
    }
    else if(puzzle7.position.x<198-50 && puzzle7.position.y<178*2-50 && puzzle7.position.y>178+50){
      puzzle7.position.x=99;
      puzzle7.position.y=89*3;
    }
    else if(puzzle7.position.x<198*2-50 && puzzle7.position.x>198+50 && puzzle7.position.y<178*2-50 && puzzle7.position.y>178+50){
      puzzle7.position.x=99*3;
      puzzle7.position.y=89*3;
    }
    else if(puzzle7.position.x>198*2+50 && puzzle7.position.y<178*2-50 && puzzle7.position.y>178+50){
      puzzle7.position.x=99*5;
      puzzle7.position.y=89*3;
    }
    else if(puzzle7.position.x<198-50 && puzzle7.position.y>178*2+50){
      puzzle7.position.x=99;
      puzzle7.position.y=89*5;
    }
    else if(puzzle7.position.x>198+50 &&puzzle7.position.x<198*2-50 && puzzle7.position.y>178*2+50){
      puzzle7.position.x=99*3;
      puzzle7.position.y=89*5;
    }
    else if(puzzle7.position.x>198*2+50 && puzzle7.position.y>178*2+50){
      puzzle7.position.x=99*5;
      puzzle7.position.y=89*5;
    }
    }
  }
  
  puzzle8.onMousePressed = function() {
    
    if((puzzle8.position.x !==puzzle1.position.x && puzzle8.position.y !==puzzle1.position.y) || 
      (puzzle8.position.x !==puzzle2.position.x && puzzle8.position.y !==puzzle2.position.y) ||
      (puzzle8.position.x !==puzzle3.position.x && puzzle8.position.y !==puzzle3.position.y) ||
      (puzzle8.position.x !==puzzle4.position.x && puzzle8.position.y !==puzzle4.position.y) ||
      (puzzle8.position.x !==puzzle5.position.x && puzzle8.position.y !==puzzle5.position.y) ||
      (puzzle8.position.x !==puzzle7.position.x && puzzle8.position.y !==puzzle7.position.y) ||
      (puzzle8.position.x !==puzzle6.position.x && puzzle8.position.y !==puzzle6.position.y) ||
      (puzzle8.position.x !==puzzle9.position.x && puzzle8.position.y !==puzzle9.position.y) ){
      puzzle8.position.x=mouseX;
      puzzle8.position.y=mouseY;
      }
          if(puzzle8.position.x<198*3 && puzzle8.position.y<178*3){
    if(puzzle8.position.x<198-50 && puzzle8.position.y<178-50){
      puzzle8.position.x=99;
      puzzle8.position.y=89;
    }
    else if(puzzle8.position.x>198+50 && puzzle8.position.x<198*2-50 && puzzle8.position.y<178-50){
      puzzle8.position.x=99*3;
      puzzle8.position.y=89;
    }
    else if(puzzle8.position.x>198*2+50 && puzzle8.position.y<178-50){
      puzzle8.position.x=99*5;
      puzzle8.position.y=89;
    }
    else if(puzzle8.position.x<198-50 && puzzle8.position.y<178*2-50 && puzzle8.position.y>178+50){
      puzzle8.position.x=99;
      puzzle8.position.y=89*3;
    }
    else if(puzzle8.position.x<198*2-50 && puzzle8.position.x>198+50 && puzzle8.position.y<178*2-50 && puzzle8.position.y>178+50){
      puzzle8.position.x=99*3;
      puzzle8.position.y=89*3;
    }
    else if(puzzle8.position.x>198*2+50 && puzzle8.position.y<178*2-50 && puzzle8.position.y>178+50){
      puzzle8.position.x=99*5;
      puzzle8.position.y=89*3;
    }
    else if(puzzle8.position.x<198-50 && puzzle8.position.y>178*2+50){
      puzzle8.position.x=99;
      puzzle8.position.y=89*5;
    }
    else if(puzzle8.position.x>198+50 &&puzzle8.position.x<198*2-50 && puzzle8.position.y>178*2+50){
      puzzle8.position.x=99*3;
      puzzle8.position.y=89*5;
    }
    else if(puzzle8.position.x>198*2+50 && puzzle8.position.y>178*2+50){
      puzzle8.position.x=99*5;
      puzzle8.position.y=89*5;
    }
    }
  }
  puzzle9.onMousePressed = function() {
    
    if((puzzle9.position.x !==puzzle1.position.x && puzzle9.position.y !==puzzle1.position.y) || 
      (puzzle9.position.x !==puzzle2.position.x && puzzle9.position.y !==puzzle2.position.y) ||
      (puzzle9.position.x !==puzzle3.position.x && puzzle9.position.y !==puzzle3.position.y) ||
      (puzzle9.position.x !==puzzle4.position.x && puzzle9.position.y !==puzzle4.position.y) ||
      (puzzle9.position.x !==puzzle5.position.x && puzzle9.position.y !==puzzle5.position.y) ||
      (puzzle9.position.x !==puzzle7.position.x && puzzle9.position.y !==puzzle7.position.y) ||
      (puzzle9.position.x !==puzzle6.position.x && puzzle9.position.y !==puzzle6.position.y) ||
      (puzzle9.position.x !==puzzle8.position.x && puzzle9.position.y !==puzzle8.position.y) ){
      puzzle9.position.x=mouseX;
      puzzle9.position.y=mouseY;
      }
    if(puzzle9.position.x<198*3 && puzzle9.position.y<178*3){
    if(puzzle9.position.x<198-50 && puzzle9.position.y<178-50){
      puzzle9.position.x=99;
      puzzle9.position.y=89;
    }
    else if(puzzle9.position.x>198+50 && puzzle9.position.x<198*2-50 && puzzle9.position.y<178-50){
      puzzle9.position.x=99*3;
      puzzle9.position.y=89;
    }
    else if(puzzle9.position.x>198*2+50 && puzzle9.position.y<178-50){
      puzzle9.position.x=99*5;
      puzzle9.position.y=89;
    }
    else if(puzzle9.position.x<198-50 && puzzle9.position.y<178*2-50 && puzzle9.position.y>178+50){
      puzzle9.position.x=99;
      puzzle9.position.y=89*3;
    }
    else if(puzzle9.position.x<198*2-50 && puzzle9.position.x>198+50 && puzzle9.position.y<178*2-50 && puzzle9.position.y>178+50){
      puzzle9.position.x=99*3;
      puzzle9.position.y=89*3;
    }
    else if(puzzle9.position.x>198*2+50 && puzzle9.position.y<178*2-50 && puzzle9.position.y>178+50){
      puzzle9.position.x=99*5;
      puzzle9.position.y=89*3;
    }
    else if(puzzle9.position.x<198-50 && puzzle9.position.y>178*2+50){
      puzzle9.position.x=99;
      puzzle9.position.y=89*5;
    }
    else if(puzzle9.position.x>198+50 &&puzzle9.position.x<198*2-50 && puzzle9.position.y>178*2+50){
      puzzle9.position.x=99*3;
      puzzle9.position.y=89*5;
    }
    else if(puzzle9.position.x>198*2+50 && puzzle9.position.y>178*2+50){
      puzzle9.position.x=99*5;
      puzzle9.position.y=89*5;
    }
    }
  }
  
  if(puzzle1.position.x===99 && puzzle1.position.y===89 && puzzle2.position.x===99*3 && puzzle2.position.y===89 &&
     puzzle3.position.x===99*5 && puzzle3.position.y===89 && puzzle4.position.x===99 && puzzle4.position.y===89*3 &&
     puzzle5.position.x===99*3 && puzzle5.position.y===89*3 && puzzle6.position.x===99*5 && puzzle6.position.y===89*3 &&
     puzzle7.position.x===99 && puzzle7.position.y===89*5 && puzzle8.position.x===99*3 && puzzle8.position.y===89*5 &&
     puzzle9.position.x===99*5 && puzzle9.position.y===89*5 ){
       textSize(30);
       fill(255);
       text("YOU WIN",198,100);
       noLoop();
     }
   drawSprites();
}


  

