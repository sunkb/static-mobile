var bindEvent = (function() {
  return function(element, event, handler) {
    if (element && event && handler) {
      element.addEventListener(event, handler, false);
    }
  };
})();

var unbindEvent = (function() {
  return function(element, event, handler) {
    if (element && event) {
      element.removeEventListener(event, handler, false);
    }
  };
})();

var bindOnce = function(el, event, fn) {
  var listener = function() {
    if (fn) {
      fn.apply(this, arguments);
    }
    unbindEvent(el, event, listener);
  };
  bindEvent(el, event, listener);
};

module.exports = {
  on: bindEvent,
  off: unbindEvent,
  once: bindOnce
};