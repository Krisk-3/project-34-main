class Fly{
    constructor(bodyA,pointB){
       var options={
           bodyA:bodyA,
           pointB:pointB,
           length:250,
           stiffness:1,
       }
       this.pointB = pointB
       this.rope = Constraint.create(options)
       World.add(world,this.rope)
    }
    display(){
        strokeWeight(0)
        line (this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}

