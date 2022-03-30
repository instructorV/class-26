
var engine,world1,ground, groundOptions,ball,ballOptions,box1,box2,box10,box11
var box12
function setup() {
  createCanvas(1000,600);
  engine = Matter.Engine.create()
  world1 = engine.world

 groundOptions = {
   isStatic:true
 }

  ground = Matter.Bodies.rectangle(500,570,1000,40,groundOptions)
  Matter.World.add(world1,ground)


 
 
}

function draw() {
  background("black");  
  Matter.Engine.update(engine)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1000,40)



}