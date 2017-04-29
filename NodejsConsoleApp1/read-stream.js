var request = require('request');


var raiseRequest = function () {
    var req = request('http://www.google.com');

    req.on('data', function (dataChunk) {
        //console.log('data>>>>>>> ' + dataChunk);
    });

    req.on('end', function () {
        console.log('end>>>>>>> ');
    });
}

module.exports.raiseRequest = raiseRequest;