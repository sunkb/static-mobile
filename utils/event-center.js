import EventEmitter from 'eventemitter3';

/**
 * 本地EventEmitter对象
 */
const eventEmitter = new EventEmitter();
eventEmitter.removeAllListeners();

export default eventEmitter;
