'use strict';
console.log('Test starts');
//setTimeout(function () {
//    console.log('Hello world');
//}, 1000);


//var sysIn =  require('./sysInfo');

//sysIn.displaySystemInformation();
//console.log('The time is ' + sysIn.currentTime);


//var et = require('./eventTester');

//var eventTest = et.calculate(5);

//eventTest.on('start', function () { console.log('start') });

//eventTest.on('end', function () { console.log('end') });

//eventTest.on('read', function (counter, tim) {
//    console.log('read ' + counter + '  ' + tim);
//});

//console.log('==================');

//var eventTesterusingInherit = require('./eventTesterUsingInherit');

//var obj = new eventTesterusingInherit(6);
//obj.on('start', function () { console.log('start') });

//obj.on('end', function () { console.log('end') });

//obj.on('read', function (counter, tim) {
//    console.log('read ' + counter + '  ' + tim);
//});


//var newReq = require('./read-stream');

//newReq.raiseRequest();


//var newReq = require('./write-stream');

//var newReq = require('./pipe');


//var newReq = require('./stdInOut');


//var newReq = require('./childprocessUsingExec');

//var newReq = require('./childprocessUsingSpawn');

var newReq = require('./childprocessUsingFork');
