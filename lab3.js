// bring connect into our file
var connect = require('connect');

// load in the url module to parse url parameters
var url = require('url');

// instantiate our app from connect
var app = connect();

// make our calculate tax function
function calculator(req,res){
	// grab the subtotal from the url
	var queryString = url.parse(req.url, true).query;
	var method = queryString.method;
	console.log(method);
	var x = parseFloat(queryString.x);
	console.log(x);
	var y = parseFloat(queryString.y);
	var result;
	switch(method){
		case "add":
			result = x + y;
			break;
		case "subtract":
			result = x - y;
			break;
		case "multiply":
			result = x * y;
			break;
		case "divide":
			result = x / y;
			break;
		default:
			result = "Can't calculate";
			break;
	}
	// display all 3 details
	res.end( x + ' ' + method + ' ' + y + ' = '   + result );
}

app.use('/calculator', calculator);

//actually start the server, on port 3000
app.listen(3000);