var os = require('os');

var displaySysInfo = function () {
    console.log('Total memory: ' + os.totalmem() / 1024 / 1024 / 1024);
    console.log('Free memory: ' + Math.round(os.freemem() / 1024 / 1024 / 1024 * 100) / 100);
    console.log('load average ' + os.loadavg());
    return Date.now();
};

module.exports.displaySystemInformation = displaySysInfo;
module.exports.currentTime = displaySysInfo();