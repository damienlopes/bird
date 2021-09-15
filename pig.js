class Piggy {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      var pig_features = { isStatic: false, restitution: 1, friction: 2  };
      this.pig = Bodies.rectangle(x, y, w, h, pig_features);
      World.add(world, this.pig);
     
    }
  
    display() {
      
      var pos = this.pig.position;
      push();
      translate (pos.x, pos.y)
      rotate (this.pig.angle)
      rectMode(CENTER);
      rect( 0, 0, this.w, this.h);
      pop();
    }
  
   
    
  }
  