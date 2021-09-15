const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var floor1
var box1, box2, box3, box4, box5
var pig1, pig2
var bird
var plank1, plank2, plank3, plank4
function preload() {
 
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  floor1 = new Floor (600,590, 1200,50)
   box1 = new Box (1000,550, 70,70)
   box2 = new Box (800,550, 70,70)
   pig1 = new Piggy (900,550, 70,70)
   box3 = new Box (1000,450, 70,70)
   box4 = new Box (800,450, 70,70)
   box5 = new Box (900,350, 70,70)
   pig2 = new Piggy (900,450,70,70)
   bird = new Birb (200,450,70,70)
   plank1 = new Planknot (900,500, 20,300, PI/2)
   plank2 = new Planknot (900,400, 20,300, PI/2)
   plank3 = new Planknot (850,350, 20,150, PI/4)
   plank4 = new Planknot (950,350, 20,150, PI/-4)
}

function draw() {
  background("black");
  Engine.update(engine)
  
  floor1.display ()
  box1.display ()
  box2.display ()
  pig1.display ()
  box3.display ()
  box4.display ()
  pig2.display ()
  bird.display ()
  box5.display ()
  plank1.display ()
  plank2.display ()
  plank3.display ()
  plank4.display ()
}



  

