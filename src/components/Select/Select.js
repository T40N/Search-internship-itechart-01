import Component from "../BaseComponent/Component.js";

class Select extends Component {
  constructor(container, className, id, name) {
    super(container, "select", className, id);
    this.setName(name);
  }
  setName(name) {
    this.element.setAttribute("name", name);
    this.name = name;
  }
}

export default Select;
