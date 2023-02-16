var thief, thiefCollide, thiefRunning;
var police, policeRun, policeStop;
var obstacleGroup, obstacle1, obstacle2,obstacle3;
var backGround, backGroundImg;
var Ground,invisibleGround, groundImage;
var score;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOverImg,restartImg;

function preload(){
  thiefRunning = loadAnimation("ladron run 1.png","ladron run 2.png");
  thiefCollide = loadImage("lose ladron.png");
  policeRun= loadImage("pngwing.com(2).png");

  groundImage=loadImage("ground2.png");
  backGroundImg=loadImage("city.jpg")
  obstacle1 = loadImage("obstaculo1.png");
  obstacle2 = loadImage("obstaculo2.png");
  obstacle3 = loadImage("obstaculo3.png");
  restartImg = loadImage("restart.png");
  gameOverImg = loadImage("gameOver.png");

}
function setup(){
  createCanvas(600,600);
  //Mover fondo
backGround=createSprite(600,600);
backGround.addImage(backGroundImg);
backGround.velocityX = -5;
}
function draw() {
  background(0);
  
  drawSprites();
}