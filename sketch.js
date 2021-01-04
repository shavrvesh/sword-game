var PLAY=1,END=0,gameState=PLAY

var position

var sword,sword_Image,sword_music

var fruits
var micros

var score1,scoreImage

var fruits1,fruits1_Image
var fruits2,fruits2_Image
var fruits3,fruits3_Image
var fruits4,fruits4_Image

var gameover,gameover_Image

var fruitsGroup
var microsGroup

var micro1,micro1_Image
var micro2,micro2_music

var score=0

function preload(){
  sword_Image=loadImage("sword.png")
 sword_music=loadSound("sword.mp3")
  
  
  scoreImage=loadImage("score.png")
  gameover_Image=loadImage("gameover.png")
gameover_music=loadSound("gameover.mp3")
  
  fruits1_Image=loadImage("fruit1.png") 
  fruits2_Image=loadImage("fruit2.png")
  fruits3_Image=loadImage("fruit3.png")   
  fruits4_Image=loadImage("fruit4.png")
  
micro1_Image=loadImage("micro1.png")
  micro2_Image=loadImage("micro2.png")
}

function setup() {
  createCanvas(600,600);
   
  
  microsGroup = createGroup()
   fruitsGroup = createGroup()
  
  sword = createSprite(300,300)
sword.addImage(sword_Image)
sword.scale=0.2
  
  score1=createSprite(270,4)
  score1.addImage(scoreImage)
 score1.scale=0.15
}

function draw(){
  
background("red")
  
  if(gameState===PLAY){
    
      if(sword.isTouching(fruitsGroup)){
    fruitsGroup.destroyEach()
    sword_music.play()
    score=score+2
        
  }
      fruit()
    micros()
  
    sword.y=World.mouseY;
  sword.x=World.mouseX;
          if(sword.isTouching(microsGroup)){
       sword.y = 200
       sword.x = 300     
          gameState=END
            gameover_music.play()
  }
  }
  if(gameState===END){
    
    fruitsGroup.setVelocityXEach(0)
     fruitsGroup.setVelocityYEach(0)
     microsGroup.destroyEach()
  gameover=createSprite(300,300)
    gameover.scale=3
      gameover.addImage(gameover_Image)
    
    }
  
  
  sword.setCollider("rectangle",0,0,100,650,40)
  
  


  
   
  

  

  
  
  drawSprites();  
  
  text(score,310,25)
}





function fruit(){
  
   
   
   
    //generate random obstacles
    var select_fruits = Math.round(random(1,2))
    position = Math.round(random(1,2));
    if(frameCount % 60 ===0){
        fruits =createSprite(0,200,20,20)
  
    if (position == 1){
      
      fruits.x=0
      fruits.velocityX=(7+score/4)
      
    }else    if (position == 2){
      
      fruits.x=600
      fruits.velocityX=-(7+score/4)
      
    }
       

        fruits.scale=0.2
       if(select_fruits == 1){
          fruits.addImage(fruits1_Image)
       } else  if(select_fruits == 2){
          fruits.addImage(fruits2_Image)
       }  else if(select_fruits == 3){
          fruits.addImage(fruits3_Image)
       }  else if(select_fruits == 4){
          fruits.addImage(fruits4_Image)
       }
       fruits.y= Math.round(random(30,550));
       fruits.lifetime=110
       fruitsGroup.add(fruits)
        }
}
  

   function micros(){
    //generate random obstacles
    var select_micros = Math.round(random(1,2));
    
     if(frameCount % 300 === 0){
       var micros=createSprite(610,200,20,20)
        micros.velocityX =-(7+score/4);
       micros.scale=1
       if(select_micros == 1){
          micros.addImage(micro1_Image)
       } else  if(select_micros == 2){
          micros.addImage(micro2_Image)
       }
      micros.y= Math.round(random(30,550));
       micros.lifetime=110
       
       microsGroup.add(micros)
       if(micros.y===fruits.y){
         micros.y=micros.y+10
         
       }
        }

  }
