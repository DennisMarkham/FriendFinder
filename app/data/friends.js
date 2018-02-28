var friendsList = [
 //this is an empty array
];

module.exports = friendsList;

//friendsList is analogous to the "waitingListArray" or "tableDataArray".  But neither of these show up again in the HotRestaraunt code.
module.exports = function(app) {
app.post("api/friends", function(req, res) {
 friendsList.push(res);
  });
};