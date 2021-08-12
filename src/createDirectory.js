//... Imports ...//
const fs = require("fs");
const process = require("process");
const CURR_DIR = process.cwd();

async function createDirectory(templatePath, projectName) {
  const filesToCreate = await fs.readdirSync(templatePath);
  console.log(filesToCreate);
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

// var projectPath = `${CURR_DIR}` + "/" + projectName;
//   await fs.mkdirSync(projectPath);
//   const filesFromTemplate = await fs.readdirSync(templatePath);

//   filesFromTemplate.forEach((file) => {
//     const pathToCreateFile = projectPath + "/" + file;
//     const originalFilePath = templatePath + "/" + file;
//     const fileStats = fs.statSync(originalFilePath);
//     if (fileStats.isFile()) {
//       const fileContent = fs.readFileSync(originalFilePath, "utf8");
//       fs.writeFileSync(pathToCreateFile, fileContent, "utf-8");
//     } else if (fileStats.isDirectory) {
//       fs.mkdirSync(pathToCreateFile);
//       createDirectory(templatePath + "/" + file, projectPath + "/" + file);
