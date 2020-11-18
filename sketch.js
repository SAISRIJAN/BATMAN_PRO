var bg;
var bgimg;
var man;
var manimg;

function preload(){
    manimg=loadImage("manimg.png")
    bgimg=loadImage("bgimg.PNG")
}

function setup(){
   createCanvas(500,700)
   bg=createSprite(250,350,900,800)
  bg.addImage(bgimg)
   bg.scale=1.8

     man=createSprite(300,637,20,20)
     man.addImage(manimg)
     man.scale=0.2
    
}

function draw(){
    drawSprites();
}   

