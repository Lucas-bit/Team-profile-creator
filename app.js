const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const outputPath = path.resolve(__dirname, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const idArray = [];

function appMenu() {

  function createManager() {
    console.log("Build your team bellow");
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What's your manager's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "You must enter at least one character.";
        }
      },
      {
        type: "input",
        name: "managerId",
        message: "Whats' your manager's id?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return "You must enter a positive number"
        }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What's your manager's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "You must enter a valid email address.";
        }
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What's your manager's office number?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return "Please enter a positive number greater than zero.";
        }
      }
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamMembers.push(manager); //all inquired info goes into teamMembers empty array
      idArray.push(answers.managerId);
      createTeam();
    });
  }

  function createTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which kind of employee would you like to add?",
        choices: [ //choice automatically creates an arrow selection 
          "Engineer",
          "Intern",
          "I don't want to add any more employees"
        ]
      }
    ]).then(userChoice => {
      switch(userChoice.memberChoice) {
      case "Engineer":
        addEngineer(); //creates inquierer prompts from addEngineer function
        break;
      case "Intern":
        addIntern(); //creates inquierer prompts from addINtern function
        break;
      default:
        buildTeam(); //if neither of the above are selected, defaults to build team from the data already obtained
      }
    });
  }

  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What's your engineer's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "You must enter at least one character.";
        }
      },
      {
        type: "input",
        name: "engineerId",
        message: "What's your engineer's id?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/ //regex, requiers that characters entered are a positive arabic numeral
          );
          return "You musta positive number greater than zero.";
        }
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What's your engineer's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/ //must inclued an @. to be accepted as an email
          );
          if (pass) {
            return true;
          }
          return " You must enter a valid email address.";
        }
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What's engineer's GitHub username?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "You must enter at least one character.";
        }
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub); //reaes new engineer constant based on the answers given
      teamMembers.push(engineer); //all inquired info goes into teamMembers empty array as an object of engineer
      idArray.push(answers.engineerId); //the answers then associated with engineerID are pushed into the idArray and the create team function is called 
      createTeam();
    });
  }

  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What's intern's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "You must enter at least one character.";
        }
      },
      {
        type: "input",
        name: "internId",
        message: "What's intern's id?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          )
          return "Please enter a positive number greater than zero.";
        }
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "You must enter a valid email address.";
        }
      },
      {
        type: "input",
        name: "internSchool",
        message: "What's your intern's school?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "You must enter at least one character.";
        }
      }
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool); //dods samething as new engineer but for intern
      teamMembers.push(intern); //all inquired info goes into teamMembers empty array with the object of intern
      idArray.push(answers.internId); //the answers then associated with internID are pushed into the idArray and the create team function is called 
      createTeam();
    });
  }

  function buildTeam() {
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8"); // function builTeam writes a file and pushes the render function into the team.html file
  }

  createManager();

}


appMenu(); //contains all of the create functions and is then called

