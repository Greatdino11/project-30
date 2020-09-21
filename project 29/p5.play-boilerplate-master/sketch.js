const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

  stand1 = new Ground(390, 270, 200, 10);

  block1 = new Box(330, 235, 30, 40);
  block2 = new Box(360, 235, 30, 40);
  block3 = new Box(390, 235, 30, 40);
  block4 = new Box(420, 235, 30, 40);
  block5 = new Box(450, 235, 30, 40);
  block6 = new Box(360, 195, 30, 40);
  block7 = new Box(390, 195, 30, 40);
  block8 = new Box(420, 195, 30, 40);
  block9 = new Box(390, 155, 30, 40);

  polygon = new Polygon(50, 200)

  slingShot = new SlingShot(polygon.body, {x: 100, y: 200})
}

function draw() {
  background(255,255,200);  
  Engine.update(engine);
  drawSprites();

  stand1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  slingShot.display();
  polygon.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(polygon.body);
  }
}
