// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Create an array of questions for user input
const { questions } = require('./questions');
const { generateMarkdown } = require('./generateMarkdown');


// Function to ask the questions
function askQuestions() {
  inquirer.prompt(questions).then(function (answers) {
    console.log(answers);
    // Call the function to write the README file with the provided answers
    writeREADME(answers);
  });
}

// Function to write README file
function writeREADME(answers) {
  // TODO: Implement the logic to write the README file using the provided answers
  // You can use the fs module or any other appropriate method to write the file
  // Example:
  fs.writeFile('README.md', generateMarkdown(answers),function(err){
    if(err) throw err;
    console.log('README file generated successfully!');
  }
  );
  
}
// Function to call license badge

    

// Function to initialize app
function main() {
  askQuestions();
}

// Function call to initialize app
main();
