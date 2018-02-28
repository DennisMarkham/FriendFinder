// Your htmlRoutes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

var path = require("path");

module.exports = function(app) {

	app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
  //default is home
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
  //when you type in the url, you should get the survey
});



};
