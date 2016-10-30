var data = require("../data.json");

exports.view = function(req, res){
	res.render('activities', {
		"activity" : data.outdoors
		// Get list of activies based on users choices 
	});
}
