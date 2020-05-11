var sc,scImg,obstacle,obsGroup,obs1,obs2,obs3,obs4,obs5;
var bg,bgImg;

function preload(){
  bgImg=loadImage("bg.jpg");
}
function setup() {
  createCanvas(600,600);

    bg=createSprite(300, 300, 600, 600);
    bg.addImage("backgrnd",bgImg);
    bg.x=bg.width/2;
    sc=createSprite(200,300,30,30);
    obsGroup=new Group();

}

function draw() {
  background(0); 

  bg.velocityX=-2;
  if(bg.x<0){
    bg.x=bg.width/2;
  }
  sc.velocityY=sc.velocityY+0.2;

  if(keyDown(UP_ARROW)){
    sc.velocityY+=-0.7;
  }

  if(keyDown(DOWN_ARROW)){
    sc.velocityY+=0.5;
  }

  spawnObstacles();

  drawSprites();
} 
function spawnObstacles(){
  if(frameCount%100===0){
    obstacle=createSprite(600,Math.round(random(50,550)),20,20);
    obstacle.velocityX=-2;
    obstacle.lifetime=-(600/obstacle.velocityX);
    obsGroup.add(obstacle);
  }
}