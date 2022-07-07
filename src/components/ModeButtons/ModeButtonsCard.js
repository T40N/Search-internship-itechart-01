import Button from "../UI/Button";
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
      "Immediate",
      false
    );

    this.onSubmitButton = new Button(
      "button",
      "onSubmitButton",
      "onSubmitButton",
      "onSubmit",
      false
    );

    this.debouncedButton = new Button(
      "button",
      "debouncedButton",
      "debouncedButton",
      "Debounced",
      false
    );

    this.throttledButton = new Button(
      "button",
      "throttledButton",
      "throttledButton",
      "Throttled",
      false
    );
  }

  mountButtons() {
    if (!this.elem) {
      console.log("First render elem!");
      return;
    }
    this.immediateButton.mount(this.elem);
    this.onSubmitButton.mount(this.elem);
    this.debouncedButton.mount(this.elem);
    this.throttledButton.mount(this.elem);
  }
}

export default ModeButtonsCard;
