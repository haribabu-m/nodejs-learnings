var spawn = require('child_process').spawn;


var childProcess = spawn('notepad', ['test.txt']);
//var childProcess2 = spawn('notepad')

//childProcess.stdout.pipe(process.stdout);
//childProcess2.stdout.pipe(process.stdout);

//console.log("PID is " + childProcess.pid);
console.log('end');