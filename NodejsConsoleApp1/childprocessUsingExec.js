var exec = require('child_process').exec;


var childProcess = exec('dir', function (err, stdout, stderr) {
    if (err)
        console.log('Error: ' + stderr);
    else
        console.log('output is: ' + stdout);

});

console.log("PID is " + childProcess.pid);