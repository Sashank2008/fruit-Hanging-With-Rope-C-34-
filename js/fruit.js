class Fruit {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    var options = {
      isStatic: false,
      restitution: 0.45,
      friction: 1,
      density: 1,
    };
    this.body = Matter.Bodies.circle(this.x, this.y, this.r, options);
    World.add(world, this.body);
    this.image = loadImage("melon.png")

  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    // ellipseMode(RADIUS);
    //   fill("brown")
    // ellipse(0, 0, this.r,this.r);
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r)
    pop();
  }
}
