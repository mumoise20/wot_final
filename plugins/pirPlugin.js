var resources = require('./../resources/model');
var ledsLights = require('../plugins/ledsPlugin');
var interval, sensor;
var value;
var model = resources.pi.sensors.pir;
var pluginName = resources.pi.sensors.pir.name;
var localParams = {'simulate': false, 'frequency': 2000};

var Gpio = require('onoff').Gpio;
sensor = new Gpio(model.gpio, 'in', 'both');
value = sensor.readSync();

exports.start = function (params) {
    localParams = params;
    if (localParams.simulate) {
    simulate();
    } else {
    connectHardware();
    }
    };
    exports.stop = function () {
    if (localParams.simulate) {
    clearInterval(interval);
    } else {
    sensor.unexport();
    }
    console.info('%s plugin stopped!', pluginName);
    };

function connectHardware() {
    showValue();
    console.info('Hardware %s sensor started!', pluginName);
};
function simulate() {
    interval = setInterval(function () {
        showValue();
    }, localParams.frequency);
    console.info('Simulated %s sensor started!', pluginName);
    
};
function showValue() {
    console.log('Trace GPIO++++++++++++++++++++: ' + model.gpio);
    console.log("PIR value: " + value);
    if (value==1)
    {
        console.log("PIR value: " + value);
        console.log('""PIR: there is some one!""');
        ledsLights.switchOn();
    }
    else
    {
        console.log("No one!!");
        console.log("PIR value: " + value);
        ledsLights.switchOff();
    }
    value = sensor.readSync(); 
};