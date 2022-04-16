const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var basket;
var fruit,fruitImg
var sling
function preload() {
  backgroundImg = loadImage("background.png");
  fruitImg = loadImage("melon.png")
}
function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(450, 390, width, 20);
  basket = new Basket(500,300,200,200)
  fruit = new Fruit(200,300,60)
  sling = new Slingshot({x:200,y:100},fruit.body)
}
function draw() {
  background(backgroundImg);

  Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  ground.display();
  basket.display()
  fruit.display()
  sling.display()
}
function mouseDragged () {
  Matter.Body.setPosition(fruit.body, {x:mouseX,y:mouseY})
}

function mouseReleased () {
  sling.fly()
} 

function keyPressed () {
  if (keyCode === UP_ARROW) {
    Matter.Body.setPosition(fruit.body, {x:200,y:100})
    sling.attach(fruit.body)
  }
}
