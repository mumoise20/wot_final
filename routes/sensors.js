let express = require('express'),
    router = express.Router(),
    resources = require('./../resources/model');

router.route('/').get(function(req, res, next){
    res.send(resources.pi.sensors);
});

router.route('/temperature').get(function(req, res,next){
    res.send(resources.pi.sensors.temperature);
});

router.route('/humidity').get(function(req, res,next){
    res.send(resources.pi.sensors.humidity);
});

router.route('/pir').get(function(req, res,next){
    res.send(resources.pi.sensors.pi);
});

module.exports = router;