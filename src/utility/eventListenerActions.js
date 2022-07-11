import data from "/src/store/dummy.json" assert { type: "json" };

let debounceTimer = 0;
let throttleTimer;

export const newEventListener = (input, eventType, callback) => {
  input.addEventListener(eventType, callback);
};

export const onSubmit = (event, callback) => {
  event.preventDefault();
  return callback;
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
  return callback;
};

export const onDebounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

export const filterArrayByName = (input, array) => {
  if (input.trim() === "") {
    return data;
  }
  return array.filter((elem) => {
    if (elem.name.toLowerCase().search(input.toLowerCase().trim()) >= 0) {
      return true;
    }
    if (elem.surname.toLowerCase().search(input.toLowerCase().trim()) >= 0) {
      return true;
    }
  });
};

export const filterArrayByOccupation = (input, array) => {
  if (input.trim() === "") {
    return data;
  }
  return array.filter((elem) => {
    if (
      elem.occupation
        .join(", ")
        .toLowerCase()
        .search(input.toLowerCase().trim()) >= 0
    ) {
      return true;
    }
  });
};

export const filterArrayByNationallity = (input, array) => {
  if (input.trim() === "") {
    return data;
  }
  return array.filter((elem) => {
    if (
      elem.nationality.toLowerCase().search(input.toLowerCase().trim()) >= 0
    ) {
      return true;
    }
  });
};
