import Text from "../Text/Text.js";

class Button extends Text {
  constructor(container, className, id, content) {
    super(container, "button", className, id, content);
  }
}

export default Button;
