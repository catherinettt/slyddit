var http = require('http');


exports.index = function (req, res) {
	res.render("index", {
					title:"Hello World",
				}, function (err, rendered) {
					res.writeHead(200, {'Content-Type':'text/html'});
					res.end(rendered);
					})
					}