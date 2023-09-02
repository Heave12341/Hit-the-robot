//creating all variables
var gameState = 0;
var startButton;
var boy;
var ground1;
var introImg;
var invisGround;
var bg;
var bulletCount = 3;
var bullet;
var bulletGroup;
var displayBullet = false;
var robotGroup;
var gameOverBG;
var restartBTN;
var score = 0;
var displayScore = false;
var rBullet;
var rBulletGroup;
var robot;
var feedback;
var introStoryImg;
var playButton;
var restartBTNImg;
var gameOverIMG;
var backgroundImg;
var groundImg;
var feedback1;
var feedback2;
var feedback3;
var feedback4;
var feedback5;
var feedback6;
var robot1;
var robot2;
var robot3;
var boyIMG;
var Explosion3;
var gameOver3;
var jump3;
var shoot3;
var how;
var howBtn;
var howImg;
var howBtnImg;
var xBtn;
var xBtnImg;
var armour1;
var armour1IMG;
var armour2;
var armour2IMG;
var armour3;
var armour3IMG;
var death = 0;
var armourLose;
var hBtn;
var hBtnImg;
var finalScore = false;

function preload(){

  //loading every images/sounds/animation
  introStoryImg = loadImage("img/Start Screen.png");
  playButton = loadImage("img/play_button.png");
  restartBTNImg = loadImage("img/restartBtn.png");
  gameOverIMG = loadImage("img/Game Over.png")
  hBtnImg = loadImage("img/HomeBtn.png")

  backgroundImg = loadImage("img/Background.png");
  
  groundImg = loadImage("img/Ground.png");
  
  feedback1 = loadImage("img/feedback/feedback1.png");
  feedback2 = loadImage("img/feedback/feedback2.png");
  feedback3 = loadImage("img/feedback/feedback3.png");
  feedback4 = loadImage("img/feedback/feedback4.png");
  feedback5 = loadImage("img/feedback/feedback5.png");
  feedback6 = loadImage("img/feedback/feedback6.png");

  howImg = loadImage("img/How.png")
  howBtnImg = loadImage("img/How button.png")

  xBtnImg = loadImage("img/XBtn.png")

  robot1 = loadAnimation("img/robot1/r1.png","img/robot1/r2.png","img/robot1/r3.png","img/robot1/r4.png","img/robot1/r5.png","img/robot1/r6.png","img/robot1/r7.png") ;
  robot2 = loadAnimation("img/robot2/r1.png","img/robot2/r2.png","img/robot2/r3.png","img/robot2/r4.png","img/robot2/r5.png","img/robot2/r6.png","img/robot2/r7.png") ;
  robot3 = loadAnimation("img/robot3/r1.png","img/robot3/r2.png","img/robot3/r3.png","img/robot3/r4.png","img/robot3/r5.png","img/robot3/r6.png","img/robot3/r7.png") ;

  boyImg = loadAnimation("img/boy/b1.png","img/boy/b2.png","img/boy/b3.png","img/boy/b4.png","img/boy/b5.png","img/boy/b6.png","img/boy/b7.png","img/boy/b8.png","img/boy/b9.png");
  
  Explosion3 = loadSound("sounds/Explosion.mp3")
  gameOver3 = loadSound("sounds/GameOver.mp3")
  jump3 = loadSound("sounds/Jump.mp3")
  shoot3 = loadSound("sounds/Shoot.mp3")
  armourLose = loadSound("sounds/ArmourLose.wav")

  armour1IMG = loadImage("img/armour-1.png")
  armour2IMG = loadImage("img/Armour-2.png")
  armour3IMG = loadImage("img/Armour-3.png")
}

function setup(){

//creating canvas
createCanvas(1000,550);
background("#000")

//creating all sprites

introImg = createSprite(500,260,50,50);
introImg.addImage(introStoryImg);
introImg.scale = 0.5;
introImg.visible = true;

how = createSprite(500,260,25,25);
how.addImage(howImg);
how.scale = 0.5;
how.visible = false;

startButton = createSprite(900,470,20,20);
startButton.addImage(playButton);
startButton.scale = 0.15;
startButton.visible = true;

howBtn = createSprite(900,75,20,20);
howBtn.addImage(howBtnImg);
howBtn.scale = 0.15;
howBtn.visible = true;

xBtn = createSprite(100,75,20,20);
xBtn.addImage(xBtnImg);
xBtn.scale = 0.15;
xBtn.visible = false;

bg = createSprite(1000,260,25,25);
bg.addImage(backgroundImg);
bg.visible = false;
bg.velocityX = -10;

ground1 = createSprite(600,650,400,50);
ground1.addImage(groundImg);
ground1.visible = false;

boy = createSprite(75,500,50,50);
boy.addAnimation("boyIMG",boyImg);
boy.scale = 2;
boy.visible = false;
boy.frameDelay = 3;
//boy.debug = true;

invisGround = createSprite(200,550,400,50);
invisGround.visible = false;

gameOverBG = createSprite(500,275,25,25);
gameOverBG.addImage(gameOverIMG);
gameOverBG.scale = 0.5;
gameOverBG.visible = false;

restartBTN = createSprite(900,475,10,10);
restartBTN.addImage(restartBTNImg);
restartBTN.visible = false;
restartBTN.scale = 0.15;

bulletGroup = new Group();
robotGroup = new Group();
rBulletGroup = new Group();

armour1 = createSprite(75,25,20,10);
armour1.addAnimation("hImg", armour1IMG)
armour1.scale = 2.5;
armour1.visible = false;

armour2 = createSprite(75,25,20,10);
armour2.addAnimation("hImg", armour2IMG)
armour2.scale = 2.5;
armour2.visible = false;

armour3 = createSprite(75,25,20,10);
armour3.addAnimation("hImg", armour3IMG)
armour3.scale = 2.5;
armour3.visible = false;

hBtn = createSprite(900,375,20,20);
hBtn.addImage(hBtnImg);
hBtn.scale = 0.15;
hBtn.visible = false;

}


function draw() {
  
  //start screen
  if(gameState === 0){

    if(mousePressedOver(howBtn)){
      how.visible = true;
      startButton.visible = false;
      howBtn.visible = false;
      xBtn.visible = true;
    }
    if(mousePressedOver(startButton)){
      gameState = 1;
    }
    
    if(mousePressedOver(xBtn)){
      how.visible = false;
      startButton.visible = true;
      howBtn.visible = true;
      xBtn.visible = false;
    }

    bg.visible = false;
    introImg.visible = true;
    boy.visible = false;
    ground1.visible = false;
    displayScore = false;
    finalScore = false;
    armour1.visible = false;
    armour2.visible = false;
    armour3.visible = false;
    hBtn.visible = false;
    gameOverBG.visible = false;
    restartBTN.visible = false;
    death = 0;
    score = 0;
    bulletCount = 3;


} 

    //to change Game State
  
  else if(gameState == 1){
    //console.log("State Changed");
    background(255);
    bg.visible = true;
    introImg.visible = false;
    startButton.visible = false;
    boy.visible = true;
    ground1.visible = true;
    displayScore = true;
    finalScore = false;
    displayBullet = true;
    armour1.visible = false;
    armour2.visible = false;
    armour3.visible = true;
    hBtn.visible = false;
    howBtn.visible = false;

    if(bg.x <= 300.5){
      bg.x = 1300;
    }
    
    //jump
    if(keyDown("up")&& boy.y > 300 ){
      boy.setFrame(6);
      boy.velocityY = -17;
      boy.addAnimation("boyIMG", boyImg);
      jump3.play();
    }
    
    //shoot
    if(keyWentDown("space")&& bulletCount != 0){
       createBullet();
       shoot3.play();
       bulletCount = bulletCount-1
    }
    //gravity
    boy.velocityY = boy.velocityY+1;
    
    spawnRobots();
    
    //if bullet touched rbot
    if(robotGroup.isTouching(bulletGroup)){
      bullet.destroy();
      robot.destroy();
      createFeedback();
      score = score+5;
      Explosion3.play();
      bulletCount = bulletCount+2
    }
    
    //if boy got shot
    if(boy.isTouching(rBulletGroup)){
      //gameState = 2;
      //gameOver3.play();
      death = death + 1;
      rBullet.destroy();
      armourLose.play()
      armourLose.loop = false;
    }

    //if robot touched boy
    if(robotGroup.isTouching(boy)){
      //gameState = 2;
      //gameOver3.play();
      death = death+ 1 ;
      robot.destroy();
      armourLose.loop = false;
      armourLose.play()
    }
    if(death == 1){
      armour3.visible = false;
      armour2.visible = true;
      armour1.visible = false;
    }
    if(death == 2){
      armour3.visible = false;
      armour2.visible = false;
      armour1.visible = true;
    }
    if(death == 3){
      armour3.visible = false;
      armour2.visible = false;
      armour1.visible = false;
      gameState = 2;
      armourLose.stop();
      gameOver3.play();
    }
 
    //console.log(score);
    //console.log(death);
    
  }// End of game state 1
  
    //if game over
    else if(gameState ===2){
      background("black");
      gameOverBG.visible = true;
      finalScore = true;
      restartBTN.visible = true;   

      
      //if restart button is pressed
      if (mousePressedOver(restartBTN)){
        gameState = 1;
        boy.visible = true;
        boy.y = 400;
        restartBTN.visible = false;
        gameOverBG.visible = false;
        score = 0;
        death = 0;
        bulletCount = 3;
        hBtn.visible = false;
      }
      if(mousePressedOver(hBtn)){
        gameState = 0;
        startButton.visible = true;
        introImg.x = 500;
        score = 0;
        bulletCount = 3;
        howBtn.visible = true;
      }
      
      displayScore = false;
      finalScore = false;
      displayBullet = false;
      finalScore = true;
      
      robotGroup.destroyEach();
      bulletGroup.destroyEach();
      rBulletGroup.destroyEach();
      boy.visible = false;
      bg.visible = false;
      ground1.visible = false;
      armour1.visible = false;
      hBtn.visible = true;
    }

   
  
  
  //to check if boy it touching ground
  if(boy.collide(invisGround)){
    boy.velocityY = 0;
  }
  
    drawSprites();
    
    //to show score
    if(displayScore){
      fill("#fff");
      textSize(18);
      text("Score = "+score, 900,25);
    }

    if(finalScore){
      fill("#FFBD59");
      textSize(90);
      text(score, 525,425);
    }

  if(displayBullet){
    fill("#fff");
    textSize(18);
    text("Bullet = "+bulletCount, 900,50);
}
}


//to spawn robots
function spawnRobots(){
  if(World.frameCount % 130== 0){
      robot = createSprite(900,425,10,10);
      robot.velocityX = -(10 + score/10);
      robotGroup.add(robot);
      robot.frameDelay = 1;
      robotBullet();
      var rand = Math.round(random(1,3));
      robot.lifetime = 250;

    //to generate random images for robot
    switch(rand) {
      case 1: robot.addAnimation("r1IMG", robot1);
              break;
      case 2: robot.addAnimation("r2IMG", robot2);
              break;
      case 3: robot.addAnimation("r3IMG", robot3);
              break;
      default: break;
    }
      robot.scale = 2;
  }
}

//to create bullets
function createBullet() {
  bullet = createSprite(155,boy.y-15,15,5);
  bullet.shapeColor = "#FFD700";
  bullet.visible = true;
  bullet.velocityX = 15;
  bulletGroup.add(bullet);
  bullet.lifetime = 150;
}

//to create feedbacks
function createFeedback(){
  feedback = createSprite(500,100,10,10);
  feedback.visible;
  feedback.scale = 0.5;
  feedback.lifetime = 15;
  var randF = Math.round(random(1,6));

  //to generate random imgs for feedbacks
  switch(randF) {
    case 1: feedback.addImage("f1", feedback1);
            break;
    case 2: feedback.addImage("f2", feedback2);
            break;
    case 3: feedback.addImage("f3", feedback3);
            break;
    case 4: feedback.addImage("f4", feedback4);
            break;
    case 5: feedback.addImage("f5", feedback5);
            break;
    case 6: feedback.addImage("f6", feedback6);
    default: break;
  }
  //console.log(randF);

}

//to create the robot bullet
function robotBullet() {
  rBullet = createSprite(robot.x-50,400,15,5);
  rBullet.shapeColor = "#FF0000";
  rBullet.visible = true;
  rBullet.velocityX = -(15 + score/10);
  rBulletGroup.add(rBullet);
  rBullet.lifetime = 150;
  //rBullet.radius = 0.5;
  //rBullet.debug = true;
}
