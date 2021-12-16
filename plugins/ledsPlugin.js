const resources = require('../resources/model');
var redLightModel = resources.pi.actuators.leds.red.gpio,
greenLightModel=resources.pi.actuators.leds.green.gpio;

var redLightValue = resources.pi.actuators.leds.red.value,
greenLightValue=resources.pi.actuators.leds.green.value;

var Gpio = require('onoff').Gpio;
var redLight= new Gpio(redLightModel , 'out');
var greenLight= new Gpio(greenLightModel , 'out');


var counter=0;
var switchOn=function(){
    var Gpio = require('onoff').Gpio;
var redLight= new Gpio(redLightModel , 'out');
var greenLight= new Gpio(greenLightModel , 'out');


    console.info("ON function");
    counter+=1;
    if(counter%2){
        redLight.writeSync(1);
        greenLight.writeSync(0);
        redLightValue = 1;
        greenLightValue = 0;

        redLightValue.exports;
        greenLightValue.exports;
    }
    if(!(counter%2)){
        greenLight.writeSync(1);
        redLight.writeSync(0);

        redLightValue = 0;
        greenLightValue = 1;
        
    
    }
};
var switchOff=function(){
    var Gpio = require('onoff').Gpio;
var redLight= new Gpio(redLightModel , 'out');
var greenLight= new Gpio(greenLightModel , 'out');

    greenLight=0;
    redLight=0;  

    redLightValue = 0;
    greenLightValue = 0;
    console.info("Both leds are off");
    module.exports={redLightValue};
    greenLightValue.exports;
};
module.exports={switchOn,switchOff};
