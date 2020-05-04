// calling express  
var express  = require("express");
// creating express server
var app = express();
// heroku || local
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

// Start our server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
