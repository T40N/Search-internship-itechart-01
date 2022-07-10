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

export const onImmidiate = (callback) => {
  callback;
};

export const onDebounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

export const filterArrayByName = (input, array) => {
  return array.filter((elem) => {
    if (elem.name.toLowerCase().search(input.toLowerCase()) >= 0) {
      return true;
    }
    if (elem.surname.toLowerCase().search(input.toLowerCase()) >= 0) {
      return true;
    }
  });
};

export const filterArrayByOccupation = (input, array) => {
  return array.filter((elem) => {
    if (elem.occupation.toLowerCase().search(input.toLowerCase()) >= 0) {
      return true;
    }
  });
};

export const filterArrayByNationallity = (input, array) => {
  return array.filter((elem) => {
    if (elem.nationality.toLowerCase().search(input.toLowerCase()) >= 0) {
      return true;
    }
  });
};
