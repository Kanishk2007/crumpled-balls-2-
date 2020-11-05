class Paper{
  constructor(xposition,yposition,radius){

  var options={
      isStatic:false,
      restitution:0.3,
      friction:0.3,
      density:1.6
  }
  this.image=loadImage("paper.png")
  this.x=xposition
  this.y=yposition
  this.radius=radius
  this.body=Bodies.circle(this.x,this.y,(this.radius-20)/2,options);
  World.add(world, this.body);
}

display(){
push();
translate(this.body.position.x,this.body.position.y);

imageMode(CENTER);
image(this.image,0,0,this.radius,this.radius);
pop();
}

}
