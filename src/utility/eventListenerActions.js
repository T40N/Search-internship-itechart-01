export const newEventListener = (input, eventType, callback) => {
  input.addEventListener(eventType, callback);
};

export const addPreventDefaultEvent = (input) => {
  newEventListener(input, "submit", (event) => {
    event.preventDefault();
  });
};
