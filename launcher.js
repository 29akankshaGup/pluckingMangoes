class Launcher{
    constructor(body1,point2){

        var options={
            bodyA:body1,
            pointB:point2,
            length:1,
            stiffness:0.004
        };
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }

    display(){
        if(this.body.bodyA){
            var pos1=this.body.bodyA.position;
            var pos2=this.body.pointB;
            
            line(pos1.x,pos1.y,pos2.x,pos2.y);
        }
        
    }

    fly(){
        this.body.bodyA=null;
    }

    attach(object1){
        this.body.bodyA=object1;
    }
}