const inquirer = require('inquirer')
const fs = require('fs')
const {Circle, Square, Triangle} = require('./shapes')

// Array of questions for user input
const questions = [
    {  
      type: 'input',
      name: 'title',
      message: 'What is your user name?',
    },
    {  
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {  
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
    },
    {  
      type: 'input',
      name: 'description',
      message: 'What is the purpose and functionality of this project?',
    },
]

