var ground;        //variables declared
var lander;
var bg_img;
var lander_img;
var vx = 0;
var vy = 0;
var g = 0.05;

function preload(){ // Images are loaded
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup(){
  createCanvas(1000,700); // Canvas created
  frameRate(80);         // Frame rate 
  lander = createSprite(100,50,30,30); // Sprite created
  lander.addImage(lander_img);// image added
  lander.scale = 0.1;      // scale given
  lander.setCollider("rectangle",0,0,200,200)
  rectMode(CENTER);       // rect mode given to center the object
  textSize(15);      
}

function draw(){
  background(51);
  image(bg_img,0,0); // Image added
  push()
  fill(255);
  text("vertical velocity:"+round(vy),800,75);
  pop();
  vy += g    //vy = vy+g, gravity added to vertical velocity
  lander.position.y += vy; //  vertical velocity added to lander's y position
  drawSprites();
}

function keyPressed(){
  if (keyCode == UP_ARROW){
    upthrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
  } 
}

function upthrust(){
  vy = -1;
}
