var player1, player2, monster1, monster2, monster3, monster4, background
var player1I, player2I, monster1I, monster2I, monster3I,  monster4I, backgroundI

function preload(){
    player1I = loadImage("boycharacter.png")
    player2I = loadImage("boycharacter2.png")
    monster1I = loadImage("monster1.png")
    monster2I = loadImage("monster2.png")
    monster3I = loadImage("monster3.png")
    monster4I = loadImage("monster4.png")
   bgI = loadImage("bg2.jpeg")
}

function setup (){
    createCanvas(windowWidth,windowHeight);
    bg = createSprite(700,500)
    bg.addImage(bgI)
    bg.scale = 2;
    player1 = createSprite(120,800,40,50)
    player1.addImage(player1I)
    player1.scale = 0.3;
    player2 = createSprite(210,800,40,50)
    player2.addImage(player2I)
    player2.scale = 0.4;
    
   
   
    
 
}
function draw(){
    background("white")

    monsters();
    monsters2();
    monsters3();
    monsters4();
   
    
    drawSprites();
}
function monsters(){
    if(frameCount % 200 == 0){
        monster1 = createSprite(1000,600,60,60)
        monster1.addImage(monster1I)
        monster1.scale = 0.4;
        monster1.velocityX = -5;
    }
}
function monsters2(){
    if(frameCount % 200  == 0){
        monster2 = createSprite(550,800,60,60)
        monster2.addImage(monster2I)
       monster2.scale = 0.9;
       monster2.velocityX = -7;
    }

}

function monsters3(){
    if(frameCount % 200 == 0){
        monster3 = createSprite(1300,850,60,60)
   monster3.addImage(monster3I)
   monster3.scale = 0.2 ;
   monster3.velocityX = -4;
    }
}
function monsters4(){
    if(frameCount % 200 == 0){
        monster4 = createSprite(120,160,60,60)
        monster4.addImage(monster4I)
        monster4.scale = 0.3;
        monster4.velocityY = 4;
     
    }
}



















