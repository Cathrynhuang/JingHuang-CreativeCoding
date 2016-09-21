/**
 * Hi Jing, it looks like you've done some javascript programming before which is great!
 * for the purposes of this class, please try to use the notation style we work on in class
 * for-in loops and vectors are powerful and great, however I want to see that you have the basics down before you use
 * the more advanced techniques.
 * Additionally, please consider readers of your code by writing variable names that are longer and descriptive.
 * Code readability is just as important as code elegance and brevity.
 * 
 */
function setup() {
  createCanvas(600,400);
  
}

function draw() {
  background(255);
  //you shouldn't have to create a vector here.
  //consider using a standard array instead of a vector, however this example could be
  //simplified without the use of vectors and arrays
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
  //consider calling noLoop() either in your setup function, or move all of the code above 
  //into setup and do away with the draw function altogether.
  noLoop();
}

