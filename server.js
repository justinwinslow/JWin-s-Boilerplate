var express = require('express'),
		stylus = require('stylus'),
		app = express();

app.use(stylus.middleware({
  debug: true,
  src: __dirname
}));

app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.status(200).sendfile('index.html');
});

app.listen(8000);

console.log('Listening on port 8000');
