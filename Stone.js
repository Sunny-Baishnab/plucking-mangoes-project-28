class Stone{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1
        }
        this.body=Bodies.circle(x,y,10,options);
        this.radius=10;
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        imageMode(RADIUS);
        image(this.image,0,0,40,40);
        pop();
    }
}