export const onThrottle = (callback, time) => {
  var wait = false;
  return (...args) => {
    if (!wait) {
      callback(...args);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, time);
    }
  };
};

export const onThrottleHandler = onThrottle((callback, ...args) => {
  callback(...args);
});
