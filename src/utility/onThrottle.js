export const onThrottle = (callback, time) => {
  let throttleTimer;
  onThrottleFunction(throttleTimer, callback, time);
};

const onThrottleFunction = (throttleTimer, callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;

  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};
