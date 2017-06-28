var express = require("express");
var app		= express();
var http	= require("http").Server(app);

// notes what is express doing, learn node 
//tell node where to find static files 
app.use(express.static(__dirname + "/public"));

//what is app.get 
app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});


//what is process.env.PORT?
//what is .listen
http.listen(process.env.PORT || 3000, function(){
	console.log("listening on *:3000");
});