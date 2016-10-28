exports.view = function(req, res){
	var cityName = req.params.city;
	console.log("name is " + cityName);
  	res.render('selectActivities', {
  		'city': cityName,
  	});
};