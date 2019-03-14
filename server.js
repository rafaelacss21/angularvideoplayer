//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static('./dist/echoes-player'));
 
app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname, '/dist/echoes-player/index.html'));
});
// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 5000);

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});