class Shape{
    constructor(color){
        this.color =color;
    }
setColor(color){
    this.color = color;
}
};

class Circle extends Shape {
    render(){
        return  `<circle cx="150" cy="100" r="300" fill="${this.color}" />`
    }
};

class Square extends Shape {
    render(){
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
};

class Triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
};
// Exports classes (Circle, Square, Triangle)
module.exports = { Circle, Square, Triangle };