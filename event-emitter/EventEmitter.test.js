const EventEmitter = require('./EventEmitter');

describe('EventEmitter class', () => {
  let emitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  it('should register and emit a basic event', () => {
    const callback = jest.fn();
    emitter.on('event1', callback);
    emitter.emit('event1', 'arg1', 'arg2');
    expect(callback).toHaveBeenCalledWith('arg1', 'arg2');
  });

  it('should register and emit multiple events', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    emitter.on('event1', callback1);
    emitter.on('event2', callback2);

    emitter.emit('event1', 'arg1', 'arg2');
    emitter.emit('event2', 'arg3', 'arg4');

    expect(callback1).toHaveBeenCalledWith('arg1', 'arg2');
    expect(callback2).toHaveBeenCalledWith('arg3', 'arg4');
  });

  it('should unregister an event', () => {
    const callback = jest.fn();
    emitter.on('event1', callback);
    emitter.off('event1', callback);
    emitter.emit('event1', 'arg1', 'arg2');
    expect(callback).not.toHaveBeenCalled();
  });

  it('should handle unregistered events', () => {
    const callback = jest.fn();
    emitter.off('event1', callback);
    emitter.emit('event1', 'arg1', 'arg2');
    expect(callback).not.toHaveBeenCalled();
  });

  it('should register and emit an event using once', () => {
    const callback = jest.fn();
    emitter.once('event1', callback);
    emitter.emit('event1', 'arg1', 'arg2');
    emitter.emit('event1', 'arg3', 'arg4');
    expect(callback).toHaveBeenCalledWith('arg1', 'arg2');
    expect(callback).not.toHaveBeenCalledWith('arg3', 'arg4');
  });
});
