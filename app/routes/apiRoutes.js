var path = require("path");
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
        var user = req.body;
        for (var i = 0; i < user.scores.legnth; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }
        console.log(req.body.scores);
        
    
        var bestMatch = 0;
        var minDifference = 40;   
        
        for (var i = 0; i < friendsData.length; i++){
            var totalDiff = 0;
            for (var j = 0; j < friendsData[i].scores.legnth; j++ ){
               var diff = Math.abs(user.scores[j] - friendsData[i].scoers[j]);
               totalDiff += diff
            }

            if( totalDiff < minDifference) {
                bestMatch = i;
                minDifference = totalDiff;
            }
        }   
        
        friendsData.push(user);

        res.json(friendsData[bestMatch]);
    });
};