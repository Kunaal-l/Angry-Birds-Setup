const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,100);
    box2 = new Box(350,300,50,100);
    ground = new Ground(200,height,400,20);
    pig = new Pig(275,300);
    log = new Logs(250,250,30,PI)
    bird = new Bird(100,200)
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    bird.display();

}