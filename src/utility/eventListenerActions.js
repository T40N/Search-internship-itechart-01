let debounceTimer = 0;

export const newEventListener = (input, eventType, callback) => {
  input.addEventListener(eventType, callback);
};

export const onSubmit = (event, valueToSubmit) => {
  event.preventDefault();
  return valueToSubmit;
};

export const onThrottle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;

  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

export const onImmidiate = (event) => {
  return event.target.value;
};

export const onDebounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};
