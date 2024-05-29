const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shape');
const path = require('path');

// Array of questions for user input
const questions = [
    {  
      type: 'list',
      name: 'shape',
      message: 'Please choose a shape',
      choices: ['Circle', 'Square', 'Triangle']
    },
    {  
        type: 'input',
        name: 'shape-color',
        message: 'Please choose a shape color',
    },
    {  
        type: 'input',
        name: 'text',
        message: 'Please type the 3 characters for the logo',
    },
    {  
      type: 'input',
      name: 'text-color',
      message: 'Please type your text color',
    },
];

// constructor function that will render shape and Text elements
class SVG {
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }

    setText(text, color) {
        if (text.length < 1 || text.length > 3) {
            throw new Error('Please input between 1-3 characters');
        }
        this.textEl = `<text x="150" y="125" font-size="60px" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShape(shape) {
        this.shapeEl = shape.render();
    }
}

function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File has been saved successfully.');
    });
}

function start() {
    inquirer.prompt(questions)
        .then((data) => {
            const logoText = data.text;
            const svg = new SVG();
            let userShape = '';
            if (data.shape === 'Circle') {
                userShape = new Circle();
            } else if (data.shape === 'Square') {
                userShape = new Square();
            } else if (data.shape === 'Triangle') {
                userShape = new Triangle();
            } else {
                console.log('Please choose a valid shape');
            }
            userShape.setColor(data['shape-color']); // Set shape color
            svg.setText(logoText, data['text-color']); // Set text color
            svg.setShape(userShape);
            writeToFile('logo.svg', svg.render());
        })
        .catch((err) => {
            console.error(err);
        });
}

start();