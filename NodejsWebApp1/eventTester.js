var event = require('event').EventEmitter;

var calculate = function (count) {
    event.emit('start');
    for (i = 0; i < count; i++) {
        count++;
        event.emit('read', count, Date.now());

    }
    event.emit('end');
};


