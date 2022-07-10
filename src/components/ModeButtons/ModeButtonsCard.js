import { newEventListener } from "../../utility/eventListenerActions.js";
import Button from "../UI/Button.js";
import Card from "../UI/Card.js";

class ModeButtonsCard extends Card {
  constructor(className, id, buttonChangeFunction) {
    super(className, id);
    this.buttonChangeFunction = buttonChangeFunction;
  }
  renderButtons() {
    this.immediateButton = new Button(
      "button",
      "buttonsCard__button buttonsCard__button--immediate",
      "immediateButton",
      "Immediate"
    );

    this.onSubmitButton = new Button(
      "button",
      "buttonsCard__button buttonsCard__button--submit",
      "onSubmitButton",
      "onSubmit"
    );

    this.debouncedButton = new Button(
      "button",
      "buttonsCard__button buttonsCard__button--debounce",
      "debouncedButton",
      "Debounced"
    );

    this.throttledButton = new Button(
      "button",
      "buttonsCard__button buttonsCard__button--throttle",
      "throttledButton",
      "Throttled"
    );

    this.immediateButton.render();
    this.onSubmitButton.render();
    this.debouncedButton.render();
    this.throttledButton.render();
  }

  mountButtons() {
    if (!this.elem) {
      console.log("First mount ButtonCard!");
      return;
    }
    this.immediateButton.mount(this.elem);
    this.onSubmitButton.mount(this.elem);
    this.debouncedButton.mount(this.elem);
    this.throttledButton.mount(this.elem);
  }
  unmountButtons() {
    this.immediateButton.unmount();
    this.onSubmitButton.unmount();
    this.debouncedButton.unmount();
    this.throttledButton.unmount();
  }
  getImmediateButton() {
    return this.immediateButton.elem;
  }
  getOnSubmitButton() {
    return this.onSubmitButton.elem;
  }
  getDebouncedButton() {
    return this.debouncedButton.elem;
  }
  getThrottledButton() {
    return this.throttledButton.elem;
  }
  addImmediateButtonEventListener() {
    newEventListener(this.immediateButton.elem, "click", () =>
      this.buttonChangeFunction("immediate")
    );
  }
  addOnSubmitButtonEventListener() {
    newEventListener(this.onSubmitButton.elem, "click", () =>
      this.buttonChangeFunction("onSubmit")
    );
  }
  addDebouncedButtonEventListener() {
    newEventListener(this.debouncedButton.elem, "click", () =>
      this.buttonChangeFunction("debounce")
    );
  }
  addThrottledButtonEventListener() {
    newEventListener(this.throttledButton.elem, "click", () =>
      this.buttonChangeFunction("throttle")
    );
  }
}

export default ModeButtonsCard;
