const appSchema = require("./app-model");

exports.createApp = (req, res, next) => {
  let parsedJsonData = req.body;

  let app = new appSchema({
    app_name: parsedJsonData.app_name,
    created_date: Date.now(),
  });

  app
    .save()
    .then((appData) => {
      console.log(
        "<-- App Controller --> createApp controller successfully completed.\nData : " +
          app
      );
      let response = {
        status: "success",
        statusCode: 200,
        data: app,
      };
      res.send(response);
    })
    .catch((error) => {
      let response = {
        status: "Failed",
        statusCode: 500,
        data: error,
      };
      res.send(response);
    });
};
