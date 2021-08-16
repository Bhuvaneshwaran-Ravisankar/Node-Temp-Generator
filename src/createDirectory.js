//... Imports ...//
const fs = require("fs");
const process = require("process");
const CURR_DIR = process.cwd();

async function createDirectory(templatePath, projectName) {
  const filesToCreate = await fs.readdirSync(templatePath);
  filesToCreate.forEach((file) => {
    const actualFilepath = templatePath + "/" + file;
    const fileStatus = fs.statSync(actualFilepath);
    if (fileStatus.isFile()) {
      const fileContent = fs.readFileSync(actualFilepath, "utf8");
      const writePath = `${CURR_DIR}/${projectName}/${file}`;
      fs.writeFileSync(writePath, fileContent, "utf8");
    } else if (fileStatus.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${projectName}/${file}`);
      createDirectory(templatePath + "/" + file, projectName + "/" + file);
    }
  });
}

module.exports = createDirectory;
