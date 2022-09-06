var express = require('express')
const process = require('process');

var expressapp = express()
expressapp.get('/', function (req, res) {
    res.send('{"message":"Hello World JavaScript iam the boss v2"}')
})
expressapp.listen(8080, function () {
    console.log('Ready on port 8080!')
})

/* To Handle Ctrl C*/
process.on('SIGINT', function () {
    process.exit();
});
