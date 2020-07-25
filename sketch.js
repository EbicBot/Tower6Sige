const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20
var box21,box22,box23,box24,box25
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  box8=new Box(330,235,30,40)
  box9=new Box(360,235,30,40)
  box10=new Box(390,235,30,40)
}

function draw() {
  background(255,255,255);  
  box8.display();
  box9.display();
  box10.display();
  drawSprites();
}