// Imports
const express = require('express');
const bodyParser = require('body-parser');

//Make an instance of a server
const app = express();
const PORT = 5000;

//Serve Static Files
app.use(express.static('server/public'));

//setup Middlewares
app.use(bodyParser.urlencoded({ extended: true}));




//run the server, on the port we want.
app.listen(PORT, function() {
    console.log('SERVER RUNNING ON PORT', PORT)
});