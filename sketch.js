const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall, dustbin, groundObject;
var world, engine;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
    dustbin=new Dustbin(1200,650);

    paperBall=new Paper(200,450,40);
  
    
    groundObject=new Ground(width/2,670,width,20);
	
  
}


function draw() {
  rectMode(CENTER);
  Engine.run(engine);
  background(255);
  
  drawSprites();
  paperBall.display();
  dustbin.display();;
  groundObject.display();
  
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:85, y:-85});
    
  }
}


