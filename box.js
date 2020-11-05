class Box{
    constructor(x,y,width,height)
    {
        var options = {
            isStatic : true
        }
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbingreen.png")
        this.body=Bodies.rectangle(x, y, width, height, options)
        World.add(world,this.body)
    }
    display()
    {
        var angle=this.body.angle;
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        fill("red")
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}