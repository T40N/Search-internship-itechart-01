import Component from "../BaseComponent/Component.js";

class Input extends Component {
  constructor(container, className, id, type, placeholder) {
    super(container, "input", className, id);
    this.setType(type);
    this.setPlaceholder(placeholder);
  }
  setType(type) {
    this.element.setAttribute("type", type);
    this.type = type;
  }
  setPlaceholder(placeholder) {
    this.element.setAttribute("placeholder", placeholder);
  }
}

export default Input;
