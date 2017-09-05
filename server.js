/*
FILE	: Server.js
AUTHOR	: Sean MOore <sean.moore@thoughtexpress.com>

*/

//	IMPORT LIBS/MODULES
var express = require('express'),
bodyParser = require('body-parser')
ChartCreator = require('./chartCreator')



app = express();

//	DEFINE PORT
port= process.env.PORT || 3000;


//	MIDDLEWARE
app.use(bodyParser.json());


//	ROUTES
app.post('/',function(req,res){
	try{
   		chartJsOptions =req.body;
   		ChartCreator.createChart(chartJsOptions,function(chart){
		res.send(chart);});
	} catch(err){
		console.log(err);
		res.send(err);
	}
	
});

app.listen(port);
console.log("Chart creator RESTful API server started on: " + port)
