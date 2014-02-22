var http = require('http');
var connect = require('connect');
var sharejs = require('share').server

var app = connect();
var port = process.env.PORT || 3000;

app.use(connect.logger('dev'));
app.use(connect.static('public')); // you can remove this and the "public" folder, if hosting the html elsewhere (e.g. python)

sharejs.attach(app, {db: {type: 'none'}});

http.createServer(app).listen(port, function(){
	console.log('Server listening on port ' + port);
});





