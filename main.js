var express = require('express')
var app = express()

var Docker = require('dockerode');
var docker = new Docker({socketPath:'/var/run/docker.sock'});



app.get('/test', function(req, res) {
	{
		res.writeHead(200, {'content-type':'text/html'});
		res.write("<h3>test</h3>");
       res.end();       
	}
})

app.get('/docker', function(req, res) {
	{
    // create a container entity. does not query API
    var container = docker.getContainer('8556da31a804');
    console.log(container);
    container.inspect(function (err, data) {
    console.log(data);
    res.writeHead(200, {'content-type':'text/html'});
    res.write(JSON.stringify(data));
    res.end();
    });
	}
})

// HTTP SERVER
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
