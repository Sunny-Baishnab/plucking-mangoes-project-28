class Mango{
    constructor(x,y,radius){
        var option={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.r=radius;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}