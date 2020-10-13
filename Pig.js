class Pig {
    constructor(x,y) {
      var Pig_options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, Pig_options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4)
      stroke("green");
     
      fill("purple");
      
      rect(0, 0, 50, 50);
      pop();
    }
  };