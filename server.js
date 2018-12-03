var express = require('express');
var app = express();

//allow heroku to dynamically allocate port
const PORT = process.env.PORT || 5000

//needed to check the body of a post
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));


//define routes here
app.get('/', (request, response) =>{
    //response.sendFile('index.html', {root: '.'});
    response.sendFile(__dirname + '/index.html');

});
//matches the form action tag in index.html called 'submit-student-data'
app.post('/submit-student-data', function (request, response) {
    var name = request.body.firstName + request.body.lastName;
    response.send(name + ' Submitted succesfully!');
});

// app.put('/update-data', function (request, response) {
//     response.send('PUT Request');
// });

// app.delete('/delete-data', function (request, response) {
//     response.send('DELETE Request');
// });

var server = app.listen(PORT, function(){
    console.log("Node.js server is running.. over port: " + PORT);
});