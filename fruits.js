class Fruits{
    constructor(x,y){
        var options={
        'isStatic':true,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
        }
        this.body=Bodies.circle(x,y,50,options)
        this.radius=50;
        this.image=loadImage("Images/apple.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}