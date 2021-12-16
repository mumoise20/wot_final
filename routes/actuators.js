let express = require('express'),
    router = express.Router(),
    resources = require('./../resources/model');

router.route('/').get(function(req, res, next){
    res.send(resources.pi.actuators);
});

router.route('/leds').get(function(req, res, next){
    res.send(resources.pi.actuators.leds);
});

router.route('/leds/green').get(function(req, res, next){
    res.send(resources.pi.actuators.leds.green);
});

router.route('/leds.red').get(function(req, res, next){
    res.send(resources.pi.actuators.leds.red);
});

router.route('/leds/:id').get(function (req, res, next) {
    req.result = resources.pi.actuators.leds[req.params.id];
    next();
    }).put(function(req, res, next) {
    var selectedLed = resources.pi.actuators.leds[req.params.id];
    selectedLed.value = req.body.value;
    console.info('Changed LED %s value to %s', req.params.id, selectedLed.value);
    req.result = selectedLed;
    next();
    });

module.exports = router;