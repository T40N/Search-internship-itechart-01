export const onDebounce = (callback, time) => {
  let debounceTimer;
  onDebounceFunction(debounceTimer, callback, time);
};

const onDebounceFunction = (debounceTimer, callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};
