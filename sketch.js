
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage,mangoSprite,tree,treeImg;

function preload(){
	boyImage=loadImage("boy.png");
	backgroundImg=loadImage("maxresdefault.jpg")
}

function setup() {
	var canvas=createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	boy=createSprite(200,500,10,20);
	boy.addImage(boyImage);
	boy.scale=0.1;
	
	mango1 = new Mango(500,200,40);
	mango2 = new Mango(450,300,40);
	mango3 = new Mango(600,250,40);
	mango4 = new Mango(630,150,40);
	mango5 = new Mango(750,300,40);
	mango6 = new Mango(750,190,40);

	ground=new Ground(600,550,1200,20);
	tree=new Tree(600,330,50,50);
	stone=new Stone(250,250);
	
	launcher=new Launcher(stone.body,{x:150,y:450});

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  Engine.update(engine);
  ground.display();
  drawSprites();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  
  launcher.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);

}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	launcher.fly();
}
function detectCollision(lstone,lmango){
	var mangoposition = lmango.body.position;
	var stoneposition = lstone.body.position;

	var distance = dist(stoneposition.x,stoneposition.y,mangoposition.x,mangoposition.y);
	if(distance <= (lmango.r+lstone.r)/2){
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:250,y:250});
		launcher.attach(stone.body);
	}
}

