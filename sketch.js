
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinObj=new dustbin(1200,650);
	 paperObject=new paper(200,450,40);
	  groundObject=new ground(width/2,670,width,20); 
	  var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); 
	  Engine.run(engine);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  dustbinObj.display();
   paperObject.display(); 
   groundObject.display();
 
}



