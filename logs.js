class Logs {
    constructor(x,y,height,angle) {
      var log_options = {
          'restitution':0.8,
          'friction':0.8,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 250, height, log_options);
      this.height = height
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      strokeWeight(4)
      stroke("brown");
      rect(0, 0, 250, this.height);
      pop();
    }
  };