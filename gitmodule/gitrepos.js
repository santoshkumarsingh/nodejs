var git = require("./request");
git.github("santoshkumarsingh",function(data) {
	console.log(data);
});