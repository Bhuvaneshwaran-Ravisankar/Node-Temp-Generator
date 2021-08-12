const inquirer = require("inquirer");
const fs = require("fs");
const createDirectory = require("./createDirectory");

//... Template directory ...//
const CHOICES = fs.readdirSync(`${__dirname}/templates`);

//... Answer object ...//
let ans = {
  name: "",
  template: "",
};

//... Question set for inquirer ...//
const QUESTIONS = [
  {
    name: "projectChoice",
    type: "list",
    message: "What project template would you like to generate?",
    choices: CHOICES,
  },
  {
    name: "projectName",
    type: "input",
    message: "Project name:",
    validate: function (input) {
      if (/^([a-z\-\_\d])+$/.test(input)) return true;
      else
        return "Project name may only include small case letters, numbers, underscores and hashes.";
    },
  },
];

//... Iquirer prompt ...//
inquirer.prompt(QUESTIONS).then((answers) => {
  ans.name = answers.projectName;
  ans.template = answers.projectChoice;
  console.log(ans);
  createDirectory(ans);
});
