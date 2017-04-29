console.log('Is process stdout writable ' + process.stdout.writable);

process.stdout.write('HBM hello');
process.stdout.write('world');