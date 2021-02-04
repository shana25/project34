class Monster{
  constructor(x, y,r) {
    var options = {
        'isStatic':false,
        'restitution':0.4,
        'density':1.2,
        'friction':0.3
    }
     this.image=loadImage("sprites/Monster-02.png");
     this.body = Bodies.circle(x, y,r, options);
     this.r = r;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    imageMode(CENTER);
   // fill("pink");
    image(this.image,pos.x, pos.y,this.r, this.r);
  }
}