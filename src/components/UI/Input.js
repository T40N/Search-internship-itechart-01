import { createHtml } from "../../utility/createHtml.js";

class Input {
  constructor(type, className, id, placeholder) {
    this.type = type;
    this.className = className;
    this.id = id;
    this.placeholder = placeholder;
    this.element = "";
  }
  render() {
    this.elem = createHtml(
      `<input 
        class="${this.className}" 
        type="${this.type}" 
        id="${this.id}" 
        placeholder="${this.placeholder}"
      >
      </input>`
    );
  }
  mount(container) {
    console.log(container);
    container.appendChild(this.elem);
  }
  unmount() {
    this.elem.remove();
  }
}

export default Input;
