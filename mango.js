class Mango{
    constructor(x,y,r){

        var options={
            isStatic:true,
            friction:1,
            restitution:0,
            density:1.2
        };
        this.body=Bodies.circle(x,y,r/2,options);       
        this.r=r;
        this.image=loadImage("images/mango.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position; 
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);     
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}