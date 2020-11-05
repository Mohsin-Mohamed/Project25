
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 380);


	engine = Engine.create();
	world = engine.world;

	paperObject = new PaperObject(width/2 , 370 , 50 , {restitution:0.3, isStatic:false});
	World.add(world, paperObject);
	
	box1=new Box(1460,300,200,200)
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 380, width, 50 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	paperObject.display();
	box1.display()
	
	
	
	drawSprites();
}

function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:80,y:-80})
    }
}



