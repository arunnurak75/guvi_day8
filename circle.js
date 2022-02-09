//2.Convert the UML diagram to Typescript class. - use number for double
class Circle{
    constructor(radius=1.0,color="red"){
        this.radius = radius;
        this.color = color;
    }
    toString(radius=this.radius){
        this.radius = radius;
        return `after converting to string ${(this.radius).toString()+(this.color).toString()}`
    }

    circle(){
        return `color is ${this.color} and radius is ${this.radius}`;
    }
    circle(radius){
        this.radius=radius;
        return `radius is ${this.radius}`;
    }
    circle(radius,color){
        this.radius=radius;
        this.color=color;
        return `the radius is ${this.radius} and color is ${this.color}`;
    }
    setRadius(radius=1.0){
        this.radius=radius;
    }
    getRadius(){
        return `the radius by get and set is ${this.radius}`;
    }
    setColor(color="red"){
        this.color=color;
    }
    getColor(){
        return `the color by get and set is ${this.color}`;
    }

    getArea(){
        return `the area is ${(this.radius)*(this.radius)*4}`;
    }
    getCircumference(){
        return `the circumference is ${(this.radius)*2*(Math.PI)}`;
    }
}
let circle1 = new Circle(6,"black");

console.log(circle1);

console.log(circle1.circle()); 
console.log(circle1.circle(4)); 
console.log(circle1.circle(5,"BLUE")); 
circle1.setRadius();
console.log(circle1.getRadius()); 
circle1.setColor();
console.log(circle1.getColor()); 
console.log(circle1.toString(6));
console.log(circle1.getArea()); 
console.log(circle1.getCircumference());