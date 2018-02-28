// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friendsData = require("../data/friends");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
  res.json(friendsList);
  //when typing in this url, you should print out the list of friends
});

// app.post("/api/friends", function(req, res){

// 	quizTakers.push(friend);
	
// });

app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
   
      friendsList.push(req.body);
      
  });
}