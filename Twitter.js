var https = require("http");
var options = {
	host: "http://api.twitter.com",
	path: "/1.1/statuses/mentions_timeline.json",
	method: "GET",
	headers: {
		"Authorization": "Basic " + new Buffer("ersantosh:password").toString("base64")
	}

};
var request = https.request(options, function(response) {
	var body = "";
	response.on("data", function(chunk,error) {
		console.log(error);
		body += chunk.toString();
	});
	response.on("end", function() {

		console.log(body);
	});


});
request.end();