
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boyImg,boy;
var stone;

var mango1,mango2,mango3,mango4,mango5;
var launcher;

function preload()
{
	boyImg=loadImage("images/boy.png");
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//create boy sprite
	boy=createSprite(240,520,40,100);
	boy.addImage("boy",boyImg);
	boy.scale=0.09;

	//Create the Bodies Here.
	ground=new Ground(400,570,800,10);
	tree=new Tree(600,330,300,500);
	stone=new Stone(190,475,40);

	mango1=new Mango(550,300,40);
	mango2=new Mango(590,280,40);
	mango3=new Mango(580,240,40);
	mango4=new Mango(540,200,40);
	mango5=new Mango(550,260,40);

	launcher=new Launcher(stone.body,{x:190,y:479});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine);
  

  ground.display();
  tree.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  drawSprites();

 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:190,y:475});
		launcher.attach(stone.body);

	}
}

function detectCollision(lstone,lmango){
	var stonePos=lstone.body.position;
	var mangoPos=lmango.body.position;

	var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
	if(distance<=lstone.r+lmango.r){
		console.log(distance);
		Matter.Body.setStatic(lmango.body,false);
	}

}



