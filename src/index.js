const inquirer = require("inquirer");
const path = require("path");

inquirer
  .prompt([
    {
      type: "text",
      name: "Application-Name",
      message: "Name of the project",
      default: path.basename(process.cwd()),
    },
    {
      type: "list",
      name: "Application-Type",
      message: "Type of the project",
      choices: ["node-express", "Angular", "React", "VueJS"],
      default: path.basename(process.cwd()), //... get current directory name (Core NodeJS property - Path) ...//
    },
  ])
  .then((result) => {
    let resp = JSON.parse(JSON.stringify(result));
    baseConfig.name = resp.name;
    conf.name = result.name;
    console.log(baseConfig);
  })
  .catch((err) => {
    console.error(err);
  });

let conf = {
  name: "",
};

let baseConfig = {
  name: "Defined",
  version: 1.0,
  builds: [
    {
      src: "src/index.js",
    },
  ],
  routes: [{ src: "/.*", dest: "src/index.js" }],
};
