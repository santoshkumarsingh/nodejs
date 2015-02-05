var https = require("https");


function getGitHubRepos(username) {
	var options = {
		host: "api.github.com",
		path: "/users/" + username + "/repos",
		method: "GET",
		headers: {
			'User-Agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'
		}
	};
	var request = https.request(options, function(response) {

		var body = "";
		response.on("data", function(c, e) {
			body += c.toString("utf-8");
		});
		response.on("end", function() {
			var repos = [];
			var json = JSON.parse(body);
			json.forEach(function(repo) {
				repos.push({
					name: repo.name,
					description: repo.description
				});

			});
			console.log(repos);
		});

	});
	request.end();
}

getGitHubRepos("santoshkumarsingh",function(data){
   console.log(data);
});