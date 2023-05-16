const questions = [
    { 
        type: 'input',
        message: 'What is the name of your Project?',
        name: 'projectName',
        default: 'README GENERATOR',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
        default: 'This is a README generator',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'What is the GitHub username for this project?',
        name: 'github',
        default: '',
    },
    {
        type: 'input',
        message: 'What is the email address for this project?',
        name: 'email',
        default: '',
    },

];
const notQuestions = [];

module.exports = {
    questions,
    notQuestions

}