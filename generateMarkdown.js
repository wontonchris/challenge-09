
// function to generate markdown for README
function generateMarkdown(answers) {
    return `
  ## Project Name
  ${answers.projectName}
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}
  
  ## GitHub Username
  ${answers.github}

  ## Email
  ${answers.email}

  ## License
  ${answers.License}
  
  
  ## Provide Screenshot below of project:
  ![alt text](assets/images/screenshot.png)
  `;
  }
  module.exports = {generateMarkdown};
  