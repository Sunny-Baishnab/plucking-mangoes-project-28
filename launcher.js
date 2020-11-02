class Launcher{
    constructor(BodyA,PointB){
            var options={
                bodyA:BodyA,
                pointB:PointB,
                stiffness:0.004,
                length:5
            }
            this.pointB=PointB;
            this.Launcher=Constraint.create(options);
            
            World.add(world,this.Launcher);
        }
        fly(){
            this.Launcher.bodyA=null;
        }
        attach(body){
            this.Launcher.bodyA = body;
        }

        display(){
            if(this.Launcher.bodyA){
             var pointA=this.Launcher.bodyA.position;
             var pointB=this.pointB;
             strokeWeight(4);
             line(pointA.x,pointA.y,pointB.x,pointB.y);
            }

        }
    
}