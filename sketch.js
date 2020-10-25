
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survival
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
  //creating the monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  
  
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  obstacleGroup=new Group()
  bananaGroup=new Group()
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = false
  
  score = 0;
  

}


function draw() {
  
  background(255);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+survivalTime, 100,50);
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  // jump when the space key is pressed
  if(keyDown("space") ) {
    monkey.velocityY = -12;
  }
  // add gravity 
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
 
  spawnbanana();
  spawnobstacle();
  drawSprites();
  
  
}
  function spawnobstacle(){
    // write code here to spawn obstacle
    if (frameCount % 60 === 0){
      var obstacle = createSprite(600,315,30,40);
      
      obstacle.velocityX=- 8
      obstacle.addImage(obstacleImage);
      obstacle.scale= 0.2;
      obstacle.lifetime = 350;
    
      monkey.collide(obstacle);
      
      obstacleGroup.add(obstacle);
      
      if(monkey.isTouching(obstacleGroup))
        {
           obstacleGroup.setVelocityXEach(0)
          survival=survival+1
        }
   }
  }
    function spawnbanana(){
      // write code here to spawn banana
      if (frameCount % 60 === 0){
        var banana = createSprite(600,170,30,40);
        
        banana.velocityX=- 12;
        banana.addImage(bananaImage);
        banana.scale=+ 0.1;
        banana.lifetime = 80;
        
        bananaGroup.add(banana);
       
      }
}
  
 
  







