var car ;
var wall;
var speed;
var weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,80,1000);
  car.velocityX=speed;
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
  deformation=(0.5*weight*speed*speed)/22500
  if(deformation < 100)
  car.shapeColor=rgb(0,250,0);
  if(deformation<180 && deformation>100)
  car.shapeColor=rgb(230,230,0);
  if(deformation>180)
  car.shapeColor=rgb(255,0,0);
}