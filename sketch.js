
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var leftSide;
var rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
istStatic:false,
restitution:0.3,
friction:0,
density:1.2



 
}
engine = Engine.create();
world = engine.world;

 ball=Bodies.circle(400,350,20,ball_options) ;
 groundObj=new Ground(width/2,670,width,20);

 leftSide=new Ground(1100,600,20,120);
 rightSide=new Ground(1300,600,20,120); 
 World.add(world,ball);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,30);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  Engine.update(engine);


  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}	
}

