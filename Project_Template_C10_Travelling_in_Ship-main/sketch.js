
var ship,shipimg
var sea,seaimg

function preload(){
shipimg = loadAnimation(" ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimg = loadAnimation("sea.png")
}

function setup(){
  createCanvas(600,450);
 
sea = createSprite(200,260,20,20)
sea.addAnimation("seaing",seaimg)
sea.scale=0.2
ship = createSprite(100,220,10,10)
ship.addAnimation("sailing",shipimg)
ship.scale = 0.3

}

function draw() {
  background("blue");
 drawSprites();
}