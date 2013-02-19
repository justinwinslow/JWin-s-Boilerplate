var express = require('express'),
	app = express();

app.get('/', function(req, res){
	res.status(200).sendfile('index.html');
});

app.use(express.static( __dirname ));

app.listen(5000);

console.log('Listening on port 5000');