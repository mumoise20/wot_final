let httpServer = require('./servers/http'),
resources = require('./resources/model'),
pirPlugin = require('./plugins/pirPlugin');
ledsPlugin = require('./plugins/ledsPlugin');


const PORT = resources.pi.port;
let server = httpServer.listen(PORT, function(){
    console.log('Listening on port %s', PORT)
});
pirPlugin.start({'simulate': true, 'frequency': 2000});
