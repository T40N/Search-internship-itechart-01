export const onDebounce = (callback, time) => {
  let timeout;

  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      callback(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, time);
  };
};

export const onDebounceHandler = onDebounce((callback, ...args) => {
  callback(...args);
}, 500);
