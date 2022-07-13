import Component from "../BaseComponent/Component.js";

class Input extends Component {
  constructor(container, className, id, type) {
    super(container, "input", className, id);
    this.setType(type);
  }
  setType(type) {
    this.element.setAtribute("type", type);
    this.type = type;
  }
}

export default Input;
