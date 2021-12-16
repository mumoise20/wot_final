let express = require('express'),
    sensorRoutes = require('./../routes/sensors'),
    actuatorRoutes = require('./../routes/actuators'),
    resources = require('./../resources/model'),
    cors = require('cors');

    
let app = express();
app.use(cors());

app.use('/pi/sensors', sensorRoutes);
app.use('/pi/actuators', actuatorRoutes);
app.get('/pi/', function(req, res){
    res.send('WoT with DHT, LEDS, PIR');
});

module.exports = app;