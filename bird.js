class Birds{
    constructor(x,y){
       var options={
        'isStatic':true,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
        }
        this.body1=Bodies.circle(x,y,70,options);
        //this.body2=Bodies.circle(windowWidth-500, windowHeight-400,70,options);
        this.radius=70;
        this.image1=loadImage("Images/bird1.png");
        //this.image2=loadImage("Images/bird2.png");
        World.add(world,this.body1);
       // World.add(world,this.body2);
    }
    display(){
        var pos1=this.body1.position;
        //var pos2=this.body2.position;
        push();
        translate(pos1.x, pos1.y);
        imageMode(CENTER);
        image(this.image1,0,0,this.radius,this.radius);
        pop();

       /*  push();
        translate(pos2.x, pos2.y);
        imageMode(CENTER);
        image(this.image2,0,0,this.radius,this.radius);
        pop(); */
    }
}