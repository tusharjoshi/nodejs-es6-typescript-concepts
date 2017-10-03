"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var eventEmitter = new events_1.EventEmitter.EventEmitter();
var openTheDoor = function openTheDoor() {
    console.log('Welcome Guest!');
};
eventEmitter.on('ringBell', openTheDoor);
eventEmitter.emit('ringBell');
