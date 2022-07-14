import { onDebounceHandler } from "./onDebounce.js";
import { onThrottleHandler } from "./onThrottle.js";

export const newEventListener = (input, eventType, callback) => {
  input.addEventListener(eventType, callback);
};

export const addPreventDefaultEvent = (input) => {
  newEventListener(input, "submit", (event) => {
    event.preventDefault();
  });
};

export const setOnImmediateEventListener = (input, callback) => {
  newEventListener(input, "input", (event) => callback(event));
};

export const setOnSubmitEventListener = (
  form,
  input,
  inputEventCallback,
  formEventCallback
) => {
  newEventListener(input, "input", (event) => inputEventCallback(event));
  newEventListener(form, "submit", (event) => {
    formEventCallback(event);
  });
};

export const setOnDebounceEventListener = (input, callback) => {
  newEventListener(input, "input", (event) => {
    onDebounceHandler(callback(event));
  });
};

export const setOnThrottleDebounceEventListener = (input, callback) => {
  newEventListener(input, "input", (event) => {
    onThrottleHandler(callback(event));
  });
};
