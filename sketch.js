var car, wall;

function setup() {
  createCanvas(800,400);
  car = createSprite(75,200,40,40);
  car.shapeColor = "white";
  wall = createSprite(725,200,20,200);
  wall.shapeColor = "brown";

  speed = random(55,90);
  weight = random(400,1500);
  
}

function draw() {
  background("black"); 
  
 car.velocityX = speed;
 
 if(wall.x-car.x <(car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation > 180){
      car.shapeColor = "red";
    }
    if(deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }

    if(deformation < 100){
      car.shapeColor = "green";
    }
  }
 
  drawSprites();
}