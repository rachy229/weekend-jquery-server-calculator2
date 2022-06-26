// Imports
const express = require('express');
const bodyParser = require('body-parser');
const math = require('./modules/math.js')

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

app.get('/math', function(req,res){
    res.send(math);
});

app.post('/math', (req, res) => {
    console.log('POST /math', req.body);
    math.push(req.body);
    operationSelector(req.body);
    res.sendStatus(201);
})


function operationSelector(){
    if (math[math.length-1].operator === '+') {
        result = Number(math[math.length-1].numOne) + Number(math[math.length-1].numTwo);
    }
    else if (math[math.length-1].operator === '-') {
        result = Number(math[math.length-1].numOne) - Number(math[math.length-1].numTwo);

    }
    else if (math[math.length-1].operator === '*') {
        result = Number(math[math.length-1].numOne) * Number(math[math.length-1].numTwo);
    }
    else if (math[math.length-1].operator === '/') {
        result = Number(math[math.length-1].numOne) / Number(math[math.length-1].numTwo)
    }
    console.log('in operation selector, result =', result);
    return result;
}
