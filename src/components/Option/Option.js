import Text from "../Text/Text.js";

class Option extends Text {
  constructor(container, className, id, content, value) {
    super(container, "option", className, id, content);
    this.setValue(value);
  }
  setValue(value) {
    this.element.setAtribute("value", value);
    this.value = value;
  }
}

export default Option;
