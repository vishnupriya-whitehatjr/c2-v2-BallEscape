var ball, wall1, wall2, wall3, wall4, wall5

function setup() {
  createCanvas(400, 400);
  ball = createSprite(320,335,10,10);
  ball.shapeColor = 'red';
  
 
  
  wall1 = createSprite(235,320,240,10);
  wall1.shapeColor = 'skyblue';
  wall2 = createSprite(200,380,300,10);
  wall2.shapeColor = 'lavender';
  wall3 = createSprite(350,350,10,70);
  wall3.shapeColor = 'lightyellow';
  wall4 = createSprite(50,210,10,350);
  wall4.shapeColor = 'lightgreen';
  wall5 = createSprite(120,210,10,220);
  wall5.shapeColor = 'turquoise';
  wall6 = createSprite(170,40,240,10);
  wall6.shapeColor = 'silver';
  wall7 = createSprite(205,100,180,10);
  wall7.shapeColor = 'gold';
  ball.velocityX = -2;
  ball.velocityY = 3;
}

function draw() {
  background("lightpink");
  text("Escape",300,100)
  drawSprites();
  ball.bounceOff(wall1);
  ball.bounceOff(wall2);
  ball.bounceOff(wall3);
  ball.bounceOff(wall4);
  ball.bounceOff(wall5);
  ball.bounceOff(wall6);
  ball.bounceOff(wall7);
  
}