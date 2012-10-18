var http = require('http');
var request = require('request');
var mime = require('mime-magic');

exports.index = function (req, res) {
	var result = {};
	request("http://www.reddit.com/hot.json", function(error, resp, body){
		body = JSON.parse(body);
		var list = body["data"]["children"];
		list.forEach(function(item, i){
			var url = item["data"]["url"];
				console.log(type);
			})
		})
		//console.log(list);
	})
	res.render("index", {
					title:"Hello World",
				}, function (err, rendered) {
					res.writeHead(200, {'Content-Type':'text/html'});
					res.end(rendered);
					})
					}
