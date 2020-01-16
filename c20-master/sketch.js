
var r = 300;
var g = 600;
var b=900;

var circle,pointer;

function setup(){
  createCanvas(900,900);
  pointer = loadImage("pointer.png");
  

  circle = createSprite(100,200,30,30);
  circle.addImage(pointer);
  circle.scale = 0.1;
  
}

function draw(){
  background("black");

  circle.x = World.mouseX;
  circle.y = World.mouseY;

  if(circle.x > -5 && circle.x < r){
    background("red");
  }
  else if(circle.x > r && circle.x < g){
    background("green");
  }
  else if(circle.x > g && circle.x < b){
    background("blue");
  }


  drawSprites();
  
}