const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var sky
var monster1,monster2
var superhero
var stage
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33
var drop,drop2
var creature

function preload() {
  sky = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

 stage = new Ground(200,500,1100,20)
 box1 = new Box(500,200,50,50)
 box2 = new Box(500,200,50,50)
 box3 = new Box(500,200,50,50)
 box4 = new Box(500,200,50,50)
 box5 = new Box(500,200,50,50)
 box6 = new Box(500,200,50,50)
 box7 = new Box(500,200,50,50)
 box8 = new Box(550,200,50,50)
 box9 = new Box(550,200,50,50)
 box10 = new Box(550,200,50,50)
 box11 = new Box(550,200,50,50)
 box12 = new Box(550,200,50,50)
 box13 = new Box(550,200,50,50)
 box14 = new Box(550,200,50,50)
 box15 = new Box(550,200,50,50)
 box16 = new Box(600,200,50,50)
 box17 = new Box(600,200,50,50)
 box18 = new Box(600,200,50,50)
 box19 = new Box(600,200,50,50)
 box20 = new Box(600,200,50,50)
 box21 = new Box(600,200,50,50)
 box22 = new Box(650,200,50,50)
 box23 = new Box(650,200,50,50)
 box24 = new Box(650,200,50,50)
 box25 = new Box(650,200,50,50)
 box26 = new Box(700,200,50,50)
 box27 = new Box(700,200,50,50)
 box28 = new Box(700,200,50,50)
 box29 = new Box(700,200,50,50)
 box30 = new Box(700,200,50,50)
 box31 = new Box(700,200,50,50)
 box32 = new Box(700,200,50,50)
 superhero = new Hero(200,200,300)
 drop = new Fly (superhero.body,{x:300,y:0})
 creature = new Monster (1000,300,300)
 drop2 = new Fly (creature.body,{x:1000,y:100})


  Engine.run(engine);

}

function draw() {
  text(mouseX + "," + mouseY, mouseX, mouseY)
  background(sky);
  Engine.update(engine);
  
  stage.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  superhero.display();
  drop.display();
  creature.display();
  drop2.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY})
}