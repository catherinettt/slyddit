var http = require('http');
var request = require('request');
var mime = require('mime-magic');

exports.index = function (req, res) {
	var result = {};
	request("http://www.reddit.com/hot.json", function(error, resp, body)
	{
	if(!error && resp.statusCode == 200)
	{
		body = JSON.parse(body);
		var list = body["data"]["children"];
		list.forEach(function(item, i){
			var url = item["data"]["url"];
			var ext = url.substr(-4);
			if(ext == '.gif' || ext == '.png' || ext == '.jpg')
			{
				result[i] = item["data"];
				console.log(result[i]["url"]);
			}
		})
	        res.render("index", {
                                        title:"Slyddit", result: result
                                }, function (err, rendered) {
                                        res.writeHead(200, {'Content-Type':'text/html'});
                                        res.end(rendered);
                                        })
	}	
	})
}
