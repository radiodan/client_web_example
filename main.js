var express  = require('express'),
    app      = express(),
    radiodan = require('radiodan-client'),
    mdns     = require('./lib/mdns'),
    port     = process.env.PORT || 5000;

app.use('/radiodan',
  radiodan.middleware({crossOrigin: true})
);

app.listen(port);

app.use(express.static(__dirname + '/static'));

mdns.advertise(radiodan, port);

console.log('Listening on port '+port);
