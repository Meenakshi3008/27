
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Contraint 

var BobObject1,BobObject2,BobObject3,BobObject4,BobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roofObject1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	roofObject1 = new Roof(400,100,500,20);
  
  BobDiameter=40;
 
  startBobPositionX=width/2; startBobPositionY=height/4+500;
  BobObject1=new Bob(startBobPositionX-BobDiameter*2,startBobPositionY,BobDiameter);
  BobObject2=new Bob(startBobPositionX-BobDiameter,startBobPositionY,BobDiameter);
  BobObject3=new Bob(startBobPositionX,startBobPositionY,BobDiameter);
  BobObject4=new Bob(startBobPositionX+BobDiameter,startBobPositionY,BobDiameter);
  BobObject5=new Bob(startBobPositionX+BobDiameter*2,startBobPositionY,BobDiameter);

	rope1 = new Rope(BobObject1.body, roofObject1.body,-BobDiameter*2,0);
	rope2 = new Rope(BobObject2.body, roofObject1.body,-BobDiameter*1,0);
	rope3 = new Rope(BobObject3.body, roofObject1.body,0);
	rope4 = new Rope(BobObject4.body, roofObject1.body,BobDiameter*1,0);
	rope5 = new Rope(BobObject5.body, roofObject1.body,BobDiameter*2,0);
 
  
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roofObject1.display();

  BobObject1.display();
  BobObject2.display();
  BobObject3.display();
  BobObject4.display();
  BobObject5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



