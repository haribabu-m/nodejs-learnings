
var fs = require('fs');
console.log('Enter your text!!!');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    process.stdout.write('Data received and stored ' + chunk);
    fs.appendFile('stdin.txt', chunk);
    process.send(chunk);
});


process.stdin.on('end', function () {
    process.stderr.write('End !!!!' );
});
