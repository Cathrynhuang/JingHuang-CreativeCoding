function setup() {
  createCanvas(600,400);
  
}

function draw() {
  background(255);
  var a=createVector(random(1,599));
  var b=createVector(random(1,399));
  var x=a.array();
  var y=b.array(); 
  if(x.length<=50 && y.length<=50){
    
    for(var p in x)
    {
      for(var q in y){
        var c=random(1,599);
        var d=random(1,399);
        if(p!=c && q!=d){
           splice(x,c,0);
           splice(y,d,0);
           for(var i=1; i<=50; i++){
           stroke(200);
           line(x[0],y[0],x[i],y[i]);
             
           }
        }
      }
    }
 
  }
  noLoop();
}

