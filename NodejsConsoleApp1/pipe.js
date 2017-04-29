var request = require('request'); //np

var fs = require('fs'); //inbuilt
var zlib = require('zlib'); //inbuilt
//request('http://www.pluralsight.com').pipe(process.stdout);

var req = request('http://www.pluralsight.com');

req.pipe(fs.createWriteStream('pluralsight.html'));

req.on('end', function () {
    console.log('Pluralsight request closed end>>>>>>> file return complete');
});


var req2 = request('http://www.pluralsight.com');

req2.pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.zip'));

req2.on('end', function () {
    console.log('Zip of Pluralsight request closed end>>>>>>> file return complete');
});