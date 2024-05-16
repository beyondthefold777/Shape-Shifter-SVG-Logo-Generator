const inquirer = require('inquirer')
const fs = require('fs')
const {Circle, Square, Triangle} = require('./shapes')
const { default: Choices } = require('inquirer/lib/objects/choices')

// Array of questions for user input
const questions = [
    {  
      type: 'input',
      name: 'shape',
      message: 'Please choose a shape',
      Choices: ['Circle', 'Square', 'Triangle']
    },
    {  
        type: 'input',
        name: 'shape-color',
        message: 'please choose a shape color',
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
]
// constructor function that will render  shape and Text elements
class SVG {
  constructor() {
  this.textEl = '';
  this.shapeEl = '',
}
render() {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
}
setText(text, color) {
  if(text.length > 3 && text.length < 1) {
    throw new Error('please input between 1-3 characters please')
  }
this.textEl = `<text x=150 y="125" font-size="60px" text-anchor="middle" fill="${color}">${test}/>text>
}
setShape(shape) {
  this.shapeEl = shape.render();
}
}

// function to initialize app
function start() {
  inquirer.createPromptModule(questions)
  .then((data) => {
    const logoText = data.text
    const svg = new SVG();
    // Lets generate the shape of the logo
    let userShape = '';
    if(data.shape == 'Circle'){
    userShape = new Circle();
    } else if(data.shape == 'Sqaure') {
      userShape = new Square();
    } else if(data.shape == 'Triangle')
     userShape = new Triangle();
    } else {
      console.log('Please choose a valid shape')
    }
    // here we are setting the logo color
    userShape.setColor(data)
  }
