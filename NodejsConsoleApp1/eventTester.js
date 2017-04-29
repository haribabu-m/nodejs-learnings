var EventE = require('events').EventEmitter;

var calculate = function (count) {
    var event = new EventE();
    
        
        process.nextTick(function () {
            event.emit('start');
            for (i = 0; i < count; i++) {
                event.emit('read', i, Date.now());
            }
            event.emit('end', count);
        });
        
    return event;
};



module.exports.calculate = calculate;