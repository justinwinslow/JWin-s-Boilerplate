var express = require('express'),
	app = express();

app.get('*', function(req, res){
	var url = (req.url === '/')?'index.html':req.url.replace('/', '');

	res.status(200).sendfile(url);
	//console.log(req, res)
});

app.listen(5000);

console.log('Listening on port 5000');