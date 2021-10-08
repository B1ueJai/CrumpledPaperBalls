var ball;
var ground, engine, world;
var leftSide,rightSide;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(700, 500);
	var ball_options = {
		isStatic:false,
		restitution: 0.7,
		friction: 0,
		density: 3
	};

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(10,450,1400,10);
	leftSide = new Ground(420,395,10,100);
	rightSide = new Ground(600,395,10,100);

	//Create the Bodies Here.

	ball = Bodies.circle(20,10,5,ball_options);
 	World.add(world,ball);
	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {

  background(0);

  ellipse(ball.position.x,ball.position.y,10);

  ground.display();
  leftSide.display();
  rightSide.display();
  Engine.update(engine);

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:130,y:-145});
	}
}