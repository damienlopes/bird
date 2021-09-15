class Box {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      var box_features = { isStatic: false, restitution: 1,friction: 2  };
      this.box = Bodies.rectangle(x, y, w, h, box_features);
      World.add(world, this.box);
     
    }
  
    display() {
      
      var pos = this.box.position;
      push();
      translate (pos.x, pos.y)
      rotate (this.box.angle)
      rectMode(CENTER);
      rect( 0, 0, this.w, this.h);
      pop();
    }
  
   
    
  }
  