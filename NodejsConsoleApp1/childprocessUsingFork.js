var fork = require('child_process').fork;


var childProcess = fork('stdInOut.js');
//var childProcess2 = spawn('notepad')

//childProcess.stdout.pipe(process.stdout);
//childProcess2.stdout.pipe(process.stdout);

//console.log("PID is " + childProcess.pid);
console.log('end');

childProcess.on('message', function (message) {
    console.log('message received from child ' + message);
});