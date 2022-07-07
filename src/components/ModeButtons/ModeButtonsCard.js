import Button from "../UI/Button.js";
import Card from "../UI/Card.js";

class ModeButtonsCard extends Card {
  constructor(className, id) {
    super(className, id);
  }
  renderButtons() {
    this.immediateButton = new Button(
      "button",
      "immediateButton",
      "immediateButton",
      "Immediate"
    );

    this.onSubmitButton = new Button(
      "button",
      "onSubmitButton",
      "onSubmitButton",
      "onSubmit"
    );

    this.debouncedButton = new Button(
      "button",
      "debouncedButton",
      "debouncedButton",
      "Debounced"
    );

    this.throttledButton = new Button(
      "button",
      "throttledButton",
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
}

export default ModeButtonsCard;
