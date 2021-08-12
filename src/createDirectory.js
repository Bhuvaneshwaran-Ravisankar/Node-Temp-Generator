const fs = require("fs");
const process = require("process");

const CURR_DIR = process.cwd();

//... Available template directory ...//
var templatePath = `${__dirname}/templates`;

async function createDirectory(answers) {
  console.log(CURR_DIR);
  await fs.mkdirSync(`${CURR_DIR}` + "/" + answers.name);
  const filesToCreate = fs.readdirSync(templatePath + "/" + answers.template);
  console.log(filesToCreate);
}

module.exports = createDirectory;
