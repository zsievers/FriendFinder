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
}