const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall1, wall2, ground, bridge, link1, link2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  console.log(canvas);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  wall1 = new Base(25, 225, 100, 200);
  wall2 = new Base(width/2-25, 225, 100, 200);

  bridge = new Bridge(14, {x: 70, y: 225});
  //Matter.Composite.add(bridge.body, wall2)
  //Matter.Composite.add(bridge.body, wall1)
  link1 = new Link(bridge, wall2.body);
  link2 = new LinkTwo(bridge, wall1.body);
}

function draw() {
  background(51);
  Engine.update(engine);

  wall1.display();
  wall2.display();
  bridge.show();

}
