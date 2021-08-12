#!/usr/bin/env/ node

const inquirer = require("inquirer");
const fs = require("fs");
const createDirectory = require("./createDirectory");
const process = require("process");
const CURR_DIR = process.cwd();

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
  var templatePath = `${__dirname}` + "/templates" + "/" + ans.template;
  var projectPath = `${CURR_DIR}` + "/" + ans.name;
  fs.mkdirSync(projectPath);
  createDirectory(templatePath, ans.name);
});
