var car,wall;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  speed = random(55, 100);
  weight = random(400,1500);
  car = createSprite(50, 200, 60, 50);
  wall = createSprite(1500, 200, 50, height/2);
  car.velocityX = speed;
  car.shapeColor = 'red';
  wall.shapeColor = 'dodgerblue';
}

function draw() {
  background(255, 255, 255);  
  drawSprites();
  if(wall.x - car.x < (car.width + wall.width) / 2){
    car.velocityX = 0;
   var de = 0.5 * weight * speed * speed / 22500; 
    if (de > 180){
      car.shapeColor = color(0, 0, 255);
    }
    else if(de < 180 && de > 100){
      car.shapeColor = 'yellow'
    }
    else {
      car.shapeColor = color(0, 255, 0)
    }
  }
}