const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg1;
var alien1;
var tree;
var b1,b2,b3,b4;
var score=10;

function preload(){
bg1=loadImage("Images/bg2.jpg");
alien1=loadImage("Images/alien1.png");
tree=loadImage("Images/tree2.png");
//b1=loadImage("Images/bird1.png");
//b2=loadImage("Images/bird2.png");
//b3=loadImage("Images/bird3.png");
//b4=loadImage("Images/bird4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
	world = engine.world;

  stone=new Pebble(windowWidth-1310,windowHeight-150,60);
  rubber1=new Rubber(stone.body,{x:windowWidth-1280,y:windowHeight-170});

  bird1=new Birds(windowWidth-800, windowHeight-565);
  bird2=new Birds(windowWidth-500, windowHeight-350);
  bird3=new Birds(windowWidth-450, windowHeight-600);
  bird4=new Birds(windowWidth-50, windowHeight-500);
  bird5=new Birds(windowWidth-200, windowHeight-400);

  fruit1=new Fruits(windowWidth-800, windowHeight-380);
  fruit2=new Fruits(windowWidth-690, windowHeight-470);
  fruit3=new Fruits(windowWidth-680, windowHeight-600);
  fruit4=new Fruits(windowWidth-550, windowHeight-700);
  fruit5=new Fruits(windowWidth-510, windowHeight-500);
  fruit6=new Fruits(windowWidth-410, windowHeight-400);
  fruit7=new Fruits(windowWidth-340, windowHeight-550);
  fruit8=new Fruits(windowWidth-150, windowHeight-600);
  fruit9=new Fruits(windowWidth-250, windowHeight-480);
  fruit10=new Fruits(windowWidth-90, windowHeight-340);

  
  Engine.run(engine);
}

function draw() {
 
  background(bg1); 

  stroke("black");
  fill("white");
  textSize(50);
  text("Turns:"+score,40,50);

  image(alien1, windowWidth-1280, windowHeight-320, 200,200);

  image(tree, windowWidth-520, windowHeight-680,600,600);
  image(tree, windowWidth-980, windowHeight-770,700,700);
  image(tree, windowWidth-670, windowHeight-600,500,500); 

  stone.display();

  rubber1.display();

  bird1.display();
  bird2.display();
  bird3.display();
  bird4.display();
  bird5.display();
  

  fruit1.display();
  fruit2.display();
  fruit3.display();
  fruit4.display();
  fruit5.display();
  fruit6.display();
  fruit7.display();
  fruit8.display();
  fruit9.display();
  fruit10.display();

  detectCollision(bird1,stone);
  detectCollision(bird2,stone);
  detectCollision(bird3,stone);
  detectCollision(bird4,stone);
  detectCollision(bird5,stone);
  detectCollision1(fruit1,stone);
  detectCollision1(fruit2,stone);
  detectCollision1(fruit3,stone);
  detectCollision1(fruit4,stone);
  detectCollision1(fruit5,stone);
  detectCollision1(fruit6,stone);
  detectCollision1(fruit7,stone);
  detectCollision1(fruit8,stone);
  detectCollision1(fruit9,stone);
  detectCollision1(fruit10,stone);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
rubber1.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body, {x:windowWidth-1310, y:windowHeight-170});
    rubber1.attach(stone.body);
  }
}

function detectCollision(lbird,lstone){
  var birdBodyPosition=lbird.body1.position;
  var stoneBodyPosition=lstone.body.position;
 
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,birdBodyPosition.x,birdBodyPosition.y)
  if(distance<=lbird.radius+lstone.radius){
    Matter.Body.setStatic(lbird.body1,false);
    score=score-4;
  }
 }

 function detectCollision1(lfruit,lstone){
  var fruitBodyPosition=lfruit.body.position;
  var stoneBodyPosition=lstone.body.position;
 
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,fruitBodyPosition.x,fruitBodyPosition.y)
  if(distance<=lfruit.radius+lstone.radius){
    Matter.Body.setStatic(lfruit.body,false);
    score=score+1;
  }
 }