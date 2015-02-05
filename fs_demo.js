var fs = require("fs");

var config = fs.readFileSync("temp.txt", "utf-8");
//Watch file for modification
fs.watchFile("a.txt", function(c, p) {
	var config = fs.readFileSync("a.txt", "utf-8");
	console.log(config);
});