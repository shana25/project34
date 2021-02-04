const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28,box29,box30;
var ground,superman,rope;
var monster;
var backgroundImage;

function preload()
{
  backgroundImage=loadImage("sprites/GamingBackground.png")
  
}

function setup()
{
    var canvas = createCanvas(3000,1000);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,20);

    box1 = new Box(600,350,60,60);
    box2 = new Box(600,350,60,60);
    box3 = new Box(600,350,60,60);
    box4 = new Box(600,350,60,60);
    box5 = new Box(600,350,60,60);
    box6 = new Box(600,350,60,60);
    box7 = new Box(600,350,60,60);
    box8 = new Box(600,350,60,60);

    
    box9  = new Box(700,240,60,60);
    box10 = new Box(700,240,60,60);
    box11 = new Box(700,240,60,60);
    box12 = new Box(700,240,60,60);
    box13 = new Box(700,240,60,60);
    box14 = new Box(700,240,60,60);
    
    
    box15 = new Box(800,120,60,60);
    box16 = new Box(800,120,60,60);
    box17 = new Box(800,120,60,60);
    box18 = new Box(800,120,60,60);
    box19 = new Box(800,120,60,60);
    box20 = new Box(800,120,60,60);
    box21 = new Box(800,120,60,60);
    box22 = new Box(800,120,60,60);
    box23 = new Box(800,120,60,60);
    box24 = new Box(800,120,60,60);

    box25 = new Box(900,60,60,60);
    box25 = new Box(900,60,60,60);
    box26 = new Box(900,60,60,60);
    box27 = new Box(900,60,60,60);
    box28 = new Box(900,60,60,60);
    box29 = new Box(900,60,60,60);
    box30 = new Box(900,60,60,60);

    superman = new Superman(200,200,200);
    monster = new Monster(1000,380,250);

    rope = new Rope(superman.body,{x:500,y:20});

}

function draw()
{
    background(backgroundImage);
    

    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
  
   superman.display();
   monster.display();
   //rope.display();
  
}

function mouseDragged()
{
    Matter.Body.setPosition(superman.body,{x:mouseX,y:mouseY});
}