import { createHtml } from "../../utility/createHtml.js";

class Input {
  constructor(type, className, id, placeholder, container, event) {
    this.event = event;
    this.type = type;
    this.className = className;
    this.id = id;
    this.container = container;
    this.element = "";
    this.render();
  }
  render() {
    this.elem = createHtml(
      `<input class="${this.className}" type="${this.type}" id="${this.id}" placeholder="${placeholder}">
      </input>`
    );
    this.container.appendChild(this.elem);
  }
}

export default Input;
