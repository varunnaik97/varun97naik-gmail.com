var express = require("express");

var app = express();

app.use(express.static('mypropwa'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/mypropwa/css'));
app.use('/js', express.static(__dirname + '/mypropwa/js'));
app.use('/images', express.static(__dirname + '/mypropwa/images'));

var server = app.listen(9002, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
