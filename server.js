var express = require('express');
var app = express();
var port = 3030;

app.use(express.static(__dirname + '/public'));


app.get('/info', function(req, res){
    res.send({data: 'To Be Implemented!'});
});

app.get('/env', function(req,res){
	var environment = process.env;
	if(environment){
		res.json({data: environment});
	}else{
		res.send({data: 'No Environment present'});
	}
});

app.listen(port, function(){
	console.log('User Information: ' + process.env.USER);
	console.log('Server listening on port ' + port);
});


