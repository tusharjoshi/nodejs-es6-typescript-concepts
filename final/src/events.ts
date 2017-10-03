import { EventEmitter } from 'events';
let eventEmitter = new EventEmitter.EventEmitter();

let openTheDoor = function openTheDoor()
{
  console.log('Welcome Guest!');
}

eventEmitter.on('ringBell', openTheDoor);

eventEmitter.emit('ringBell');