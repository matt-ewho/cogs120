exports.view = function(req, res){
  var mapClient = require('@google/maps').createClient({
        key: ''
    });
  mapClient.direction
  res.render('map', {

  });
};