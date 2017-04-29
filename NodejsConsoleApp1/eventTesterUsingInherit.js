var EventE = require('events').EventEmitter;
var util = require('util');

var calculate = function (count) {
    var obj = this;
        process.nextTick(function () {
            obj.emit('start');
            for (i = 0; i < count; i++) {
                obj.emit('read', i, Date.now());
            }
            obj.emit('end', count);
        });
        
        //return this;
};


util.inherits(calculate, EventE);

module.exports = calculate;