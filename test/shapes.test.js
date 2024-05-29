const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('renders correctly with specified color', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="300" fill="red" />');
  });
});

describe('Triangle', () => {
  test('renders correctly with specified color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Square', () => {
  test('renders correctly with specified color', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toBe('<rect x="73" y="40" width="160" height="160" fill="green" />');
  });
});