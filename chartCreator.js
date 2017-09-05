const ChartjsNode= require('chartjs-node');


var ChartCreator = function(){};


ChartCreator.createChart = function(chartJsOptions,callback){
	var size = chartJsOptions.size;
	
	if (size){
		var chartNode = new ChartjsNode(size.width,size.height);
		return chartNode.drawChart(chartJsOptions).then(()=>{
			return chartNode.getImageBuffer('image/png');
		}).then(buffer => {
			callback(buffer)
		
		}).then(() =>{
			chartNode.destroy();
		});
	}else{
		throw "Image size not specified";
	}
}

module.exports = ChartCreator;
