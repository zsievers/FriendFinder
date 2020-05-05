// LOAD DATA
// We are linking our routes to a series of "data" sources.
var friendsData = require("../data/friends");

// // ===============================================================================
// // ROUTING
// // ===============================================================================

module.exports = function(app) {

    app.get("/api/friends", function(req,res){
        res.json(friendsData);
    });


  // API POST Requests
  // ---------------------------------------------------------------------------
    app.post("/api/friends", function(req, res) {
        var userScore = req.body.scores;
        var scoresArr = [];
        var bestMatch = 0;
        
        
        for (var i = 0; i < friendsData.length; i++){
            var scoreDiff = 0;
            for (var j = 0; j < userScore.length; j++ ){
               scoreDiff += (Math.abs(parseInt(friendsData[i])) - parseInt(userScore[j]))
            };
            scoresArr.push(scoreDiff);
        }   
            // looping through scoresArr 
        for (var i = 0; i <scoresArr.length; i++) {
            if (scoresArr[i] <= scoresArr[bestMatch]) {
                bestMatch = i;
            }
        }

        var bff = friendsData[bestMatch];
        res.json(bff);
        friendsData.push(req.body)
    });
};