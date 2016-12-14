var duo;
var duore;
var re;
var reme;
var me;
var fa;
var faso;
var so;
var sola;
var la;
var lasi;
var si;
var duo1;
var duore1;
var re1;
var reme1;
var me1;
var fa1;
var faso1;
var so1;
var sola1;
var la1;
var lasi1;
var si1;

var value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12,value13,value14;
var valuea,valueb,valuec,valued,valuee,valuef,valueg,valueh,valuei,valuej;
var title;

function setup() {

  createCanvas(1260,500);
  duo = loadSound('c4.mp3');
  duore=loadSound('c4m.mp3');
  re = loadSound('d4.mp3'); 
  reme = loadSound('d4m.mp3'); 
  me = loadSound('e4.mp3'); 
  fa = loadSound('f4.mp3'); 
  faso = loadSound('f4m.mp3'); 
  so = loadSound('g4.mp3');
  sola = loadSound('g4m.mp3');
  la = loadSound('a4.mp3');
  lasi = loadSound('a4m.mp3');
  si = loadSound('b4.mp3');  
  duo1 = loadSound('c5.mp3');
  duore1=loadSound('c5m.mp3');
  re1 = loadSound('d5.mp3'); 
  reme1 = loadSound('d5m.mp3'); 
  me1 = loadSound('e5.mp3'); 
  fa1 = loadSound('f5.mp3'); 
  faso1 = loadSound('f5m.mp3'); 
  so1 = loadSound('g5.mp3');
  sola1 = loadSound('g5m.mp3');
  la1 = loadSound('a5.mp3');
  lasi1 = loadSound('a5m.mp3');
  si1 = loadSound('b5.mp3');
  //loads sound effect

  
  background(0);
 }

function draw() {
  Playpiano();
  drawWhite();
  drawBlack();
  Guidewords();
  Guidemusic();
}
 
function Playpiano() {                                                                         
  if (keyIsPressed===true && key=== 'q') { 
      duo.play();
      value1=200;                         
  }
  else {
    value1=255;
  }
  
if (keyIsPressed===true && key=== 'w') { 
      re.play();
      value2=200;                         
  }
  else {
    value2=255;
  }
  
  if (keyIsPressed===true && key=== 'e') { 
      me.play();
      value3=200;                         
  }
  else {
    value3=255;
  }
  
  if (keyIsPressed===true && key=== 'r') { 
      fa.play();
      value4=200;                         
  }
  else {
    value4=255;
  }
  
  if (keyIsPressed===true && key=== 't') { 
      so.play();
      value5=200;                         
  }
  else {
    value5=255;
  }
  
  if (keyIsPressed===true && key=== 'y') { 
      la.play();
      value6=200;                         
  }
  else {
    value6=255;
  }
  
  if (keyIsPressed===true && key=== 'u') { 
      si.play();
      value7=200;                         
  }
  else {
    value7=255;
  }
  
  if (keyIsPressed===true && key=== 'z') { 
      duo1.play();
      value8=200;                         
  }
  else {
    value8=255;
  }
  
  if (keyIsPressed===true && key=== 'x') { 
      re1.play();
      value9=200;                         
  }
  else {
    value9=255;
  }
  
  if (keyIsPressed===true && key=== 'c') { 
      me1.play();
      value10=200;                         
  }
  else {
    value10=255;
  }
  
  if (keyIsPressed===true && key=== 'v') { 
      fa1.play();
      value11=200;                         
  }
  else {
    value11=255;
  }
  
  if (keyIsPressed===true && key=== 'b') { 
      so1.play();
      value12=200;                         
  }
  else {
    value12=255;
  }
  
  if (keyIsPressed===true && key=== 'n') { 
      la1.play();
      value13=200;                         
  }
  else {
    value13=255;
  }
  
  if (keyIsPressed===true && key=== 'm') { 
      si1.play();
      value14=200;                         
  }
  else {
    value14=255;
  }
  
  if (keyIsPressed===true && key=== '2') { 
      duore.play();
      valuea=100;                         
  }
  else {
    valuea=0;
  }
  
  if (keyIsPressed===true && key=== '3') { 
      reme.play();
      valueb=100;                         
  }
  else {
    valueb=0;
  }
  
  if (keyIsPressed===true && key=== '5') { 
      faso.play();
      valuec=100;                         
  }
  else {
    valuec=0;
  }
  
  if (keyIsPressed===true && key=== '6') { 
      sola.play();
      valued=100;                         
  }
  else {
    valued=0;
  }
  
  if (keyIsPressed===true && key=== '7') { 
      lasi.play();
      valuee=100;                         
  }
  else {
    valuee=0;
  }
  
  if (keyIsPressed===true && key=== 's') { 
      duore1.play();
      valuef=100;                         
  }
  else {
    valuef=0;
  }
  
  if (keyIsPressed===true && key=== 'd') { 
      reme1.play();
      valueg=100;                         
  }
  else {
    valueg=0;
  }
  
  if (keyIsPressed===true && key=== 'g') { 
      faso1.play();
      valueh=100;                         
  }
  else {
    valueh=0;
  }
  
  if (keyIsPressed===true && key=== 'h') { 
      sola1.play();
      valuei=100;                         
  }
  else {
    valuei=0;
  }
  
  if (keyIsPressed===true && key=== 'j') { 
      lasi1.play();
      valuej=100;                         
  }
  else {
    valuej=0;
  }
}

function drawWhite(){
  
    fill(floor(value1));
    rect(0,0,89.5,400);
    
    fill(floor(value2));
    rect(90,0,89.5,400);
    
    fill(floor(value3));
    rect(180,0,89.5,400);
    
    fill(floor(value4));
    rect(270,0,89.5,400);
    
    fill(floor(value5));
    rect(360,0,89.5,400);
    
    fill(floor(value6));
    rect(450,0,89.5,400);
    
    fill(floor(value7));
    rect(540,0,89.5,400);
    
    fill(floor(value8));
    rect(630,0,89.5,400);
    
    fill(floor(value9));
    rect(720,0,89.5,400);
    
    fill(floor(value10));
    rect(810,0,89.5,400);
    
    fill(floor(value11));
    rect(900,0,89.5,400);
    
    fill(floor(value12));
    rect(990,0,89.5,400);
  
    fill(floor(value13));
    rect(1080,0,89.5,400);
    
    fill(floor(value14));
    rect(1170,0,89.5,400);
}

function drawBlack(){
  
    fill(floor(valuea));
    rect(60,0,60,200);
    
    fill(floor(valueb));
    rect(150,0,60,200);
    
    fill(floor(valuec));
    rect(330,0,60,200);
    
    fill(floor(valued));
    rect(420,0,60,200);
    
    fill(floor(valuee));
    rect(510,0,60,200);
    
    fill(floor(valuef));
    rect(690,0,60,200);
    
    fill(floor(valueg));
    rect(780,0,60,200);
    
    fill(floor(valueh));
    rect(960,0,60,200);
    
    fill(floor(valuei));
    rect(1050,0,60,200);
    
    fill(floor(valuej));
    rect(1140,0,60,200);
    
}

function Guidewords(){
  
  textSize(12);
  textStyle(BOLD);
  text("Q",40,380);
  text("W",130,380);
  text("E",220,380);
  text("R",310,380);
  text("T",400,380);
  text("Y",490,380);
  text("U",580,380);
  text("Z",670,380);
  text("X",760,380);
  text("C",850,380);
  text("V",940,380);
  text("B",1030,380);
  text("N",1120,380);
  text("M",1210,380);
  
  fill(255);
  textSize(12);
  textStyle(BOLD);
  text("2",87,185);
  text("3",177,185);
  text("5",357,185);
  text("6",447,185);
  text("7",537,185);
  text("S",717,185);
  text("D",807,185);
  text("G",987,185);
  text("H",1077,185);
  text("J",1167,185);
}

function Guidemusic(){
  fill(255);
  noStroke();
  textSize(15);
  textStyle(ITALIC);
  text("Guide ( type the letters below ) :",25,425);
  text("Fur Elise: CDCDCUXZY QEYU E6UZ  ECDCDCUXZY QEYU EZUY UZXC TVCX TCXZ EXZU EECDCDCUXZY QEYU EZUY",25,475);
  text("Ode to Joy: CCVBBVCXZZXCCXX   CCVBBVCXZZXCXZZ  XXCZXCVCZXCVCXZXT  CCVBBVCXZZXCXZZ",25,450);
}