
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinob;
var groundob;
var paperob;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbinob=new dustbin(1200,650)
groundob=new ground(width/2,670,width,20)
paperob=new paper(200,450,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbinob.display()
  paperob.display()
  groundob.display()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paperob.body,paperob.body.position,{x:85,y:-85})
	}
}

