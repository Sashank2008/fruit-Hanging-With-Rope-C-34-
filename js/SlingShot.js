class Slingshot {
  constructor(pointA, bodyB) {
    var options = {
      pointA: pointA,
      bodyB: bodyB,
      stiffness: 0.001,
      length: 10,
    };
    this.sling = Matter.Constraint.create(options);
    World.add(world, this.sling);
    this.pointA = pointA;
    this.bodyB = bodyB;
  }
  
  display() {
    if (this.sling.bodyB) {
        var pointA = this.pointA;
        var pointB = this.sling.bodyB.position;
        push();
        stroke("cyan")
        strokeWeight(4)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
  
  }
  fly() {
      this.sling.bodyB=null
  }
  attach(body) {
      this.sling.bodyB=body
  }
}
