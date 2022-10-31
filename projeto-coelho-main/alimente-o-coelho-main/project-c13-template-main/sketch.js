var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

rabbit.x = world.mousex;

function draw() {
  background(0);
 

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  




function createApples(){
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
	apple.scale=0.07;
	apple.velocityY = 3;
  apple.lifetime = 150;
createApples();

}
function createOrangel(){
  orangel = createSprite(random(50,350),40,10,10);
  orangel.addImage(orangelImg);
    orangel.scale=0.08;
    orangel.velocityY = 3;
    orangel.lifetime = 150;
  createOrangel();

}

function createRed(){
 redel = createSprite(random(50,350),40,10,10);
  redl.addImage(redImg);
    redl.scale=0.06;
    redl.velocityY = 3;
    redl.lifetime = 150;
  createRed();
}

}


if (frameCount % 80 == 0 ) {
  if (select_sprites == 1) {
createApples();
  }else if(select_sprites == 2){
createOrangel();
  }else {
createRed();
       }
      }