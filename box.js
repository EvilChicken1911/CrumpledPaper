class Box {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;
      this.width=200;
      this.height=150;
      this.thickness=20;
      this.angle=0;
      this.leftBody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,options);
      Matter.Body.setAngle(this.leftBody,this.angle);
      this.rightBody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,options);
      Matter.Body.setAngle(this.rightBody,-1*this.angle);
      this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
      World.add(world, this.bottomBody);
    }
    display(){
      var pos =this.bottomBody.position;
      var posleft =this.leftBody.position;
      var posright =this.rightBody.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      //angleMode(RADIANS);
      fill("brown");
      rect(0, 0, this.width, this.thickness);
      pop();
      push();
      translate(posleft.x,posleft.y);
      rectMode(CENTER);
      angleMode(RADIANS);
      rotate(this.angle);
      fill("brown");
      rect(0, 0, this.thickness, this.height);
      pop();
      push();
      translate(posright.x,posright.y);
      rectMode(CENTER);
      angleMode(RADIANS);
      rotate(-1*this.angle);
      fill("brown");
      rect(0, 0, this.thickness, this.height);
      pop();
      
    }
  };