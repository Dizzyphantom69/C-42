var spacecraft , spacecraftImage;
var backgroundImage;
var spaceship , spaceshipImage;

var gameState = "undocked" ;

function preload(){
spacecraftImage= loadAnimation("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png");
backgroundImage=loadImage("spacebg.jpg");
spaceshipImage = loadImage("iss.png");
spacecraftImage1= loadAnimation("spacecraft1.png");
}


function setup() {
  createCanvas(800,400);

  spacecraft = createSprite(400, 300, 50, 50);
  spacecraft.addAnimation("run",spacecraftImage);
  spacecraft.addAnimation("run run",spacecraftImage1);
  spacecraft.scale = 0.1;


  spaceship = createSprite(400,200,50,50);
  spaceship.addImage(spaceshipImage);
}

function draw() {
  background(backgroundImage);  
  if(gameState!== "docked"){
  if(keyDown("right")){
    spacecraft.x +=5;
  }
  if(keyDown("left")){
    spacecraft.x -=5;
  }

  if(keyDown("down")){
    spacecraft.y +=5;
  }
  if(keyDown("up")){
    spacecraft.y -=5;
  }
  
  console.log(spacecraft.x);
  console.log(spacecraft.y);
  //x = 335;
  //y=265;

  if(spacecraft.x===335 && spacecraft.y===265){
    gameState= "docked";
  }
}

else{
    spacecraft.changeAnimation("run run",spacecraftImage1);
    spacecraft.y = 245;

}
  
  drawSprites();
}