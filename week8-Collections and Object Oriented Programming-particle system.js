var particlesystem1;
var particlesystem2;

function setup() {
  createCanvas(1000, 500);

  particlesystem1 = new ParticleSystem(createVector(width*2/7,height/2));
  particlesystem2 = new ParticleSystem(createVector(width*5/7,height/2));
}

function draw() {
  background(0);
  particlesystem1.addParticle();
  particlesystem1.run();
  particlesystem2.addParticle();
  particlesystem2.run();
}

var Particle = function(position) {
  this.acceleration = createVector(-0.01, 0.01);
  this.velocity = createVector(random(-3,3), random(-3,3));
  this.position = position.copy();
  this.particlecolor=color(random(255),random(255),random(255));
  this.size=random(3,15);
  this.lifespan=200.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 1;
};

Particle.prototype.display = function() {

  noStroke();
  strokeWeight(2);
  fill(this.particlecolor, this.lifespan);
  ellipse(this.position.x+1, this.position.y,this.size,this.size);
};


Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};
ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
