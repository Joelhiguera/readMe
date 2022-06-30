// TODO: Include packages needed for this application ✅
const inquirer = require('inquirer');
const fs = require('fs');
const sheild = "https://img.shields.io/github/license/JoelHiguera/Stress-Project"
const MIT = sheild;

// TODO: Create an array of questions for user input ✅
 inquirer.prompt ([
{
  type: 'input',
  message: 'Please enter the title of your new readMe:',
  name: 'title',
},
{
  type: 'editor',
  message: 'Please enter the descrption of your new readMe:',
  name: 'description',
},
{
  type: 'editor',
  message: 'Please enter the installation instructions:',
  name: 'install',
},
{
  type: 'input',
  message: 'Please enter the usage information:',
  name: 'usage',
},
{
  type: 'input',
  message: 'Please enter the contribution guidlines:',
  name: 'contribution',
},
{
  type: 'input',
  message: 'Please enter the testing instruction:',
  name: 'test',
},
{
  type: 'input',
  message: 'Please enter your GitHub username:',
  name: 'github',
},
{
  type: 'list',
  message: 'Please select a license you would like to add:',
  choices: [MIT, 'None'],
  name: 'license',
},
{
  type: 'input',
  message: 'Please enter your email address:',
  name: 'email',
},



])

.then(response => {
  const generateReadMe = 
  `# ${response.title}
  ![](${response.license} "")

  ## Description 
  ${response.description}

  ## Installation Instructions
  ${response.install}

  ## Usage Information
  ${response.usage}

  ## Contribution Guidlines 
  ${response.contribution}

  ## Testing Instructions
  ${response.test}

  ## Selected License 
  ![](${response.license} "")

  ## Questions 
  Github URL: ${response.github}

  Email: ${response.email}
  `
  // TODO: Create a function to write README file ✅ 
  fs.writeFile("README.md", generateReadMe, function(err){
    console.log(err);
  });
  
})



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(); 