class Slingshot{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB : pointB,
            length : 100,
            stiffness : 0.3
        }

        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position ;
            var pointB = this.pointB;

            stroke("white");
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x , pointB.y);
        }
    }
}