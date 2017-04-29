'use strict';
var cluster = require('cluster');
var http = require('http');
//var port = process.env.PORT || 1337;

var numOfWorkers = 2;

if (cluster.isMaster) {
    for (var i = 0; i < 2; i++){
        console.log('Master: about to fork a worker ' + i);
        cluster.fork();
    }

    cluster.on('fork', function (worker) {
        console.log(' Master: fork event- Worker ' + worker.id);
    });

    cluster.on('online', function (worker) {
        console.log(' Master: online event- Worker ' + worker.id);
    });

    cluster.on('listening', function (worker) {
        //console.log('address ' + address);
       // console.log(' Master: listening event - Worker ' + worker.id + ', ' + worker.process.pid + ', ' + worker.address + ':' + worker.address.port);
    });

    cluster.on('exit', function (worker, code, signal) {
        console.log(' Master: exit event- Worker ' + worker.id );
    });
}
else {
   // console.log(' Ready Worker ' + cluster.worker.id + ' ' + cluster.worker.address + ' ' + process.address);
    var count = 0;

    http.createServer(function (req, res) {
        count++;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n    ' + cluster.worker.id + ' process ' + cluster.worker.process.pid + ' count' + count);
        if (count === 3)
            cluster.worker.destroy;
    }).listen(process.env.PORT);

   
}


