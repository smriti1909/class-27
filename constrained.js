class Chain{
    constructor(body1,body2){
var options = {
    bodyA: body1,
    bodyB: body2,
    length: 50,
}
this.chain= Constrained.create(options);
World.add(world,this.chain);
    }
display(){
    line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
}

}