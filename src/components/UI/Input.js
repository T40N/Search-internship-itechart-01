import { createHtml } from "../../utility/createHtml.js";

class Input {
  constructor(type, className, id, placeholder) {
    this.type = type;
    this.className = className;
    this.id = id;
    this.placeholder = placeholder;
    this.elem = "";
  }
  render() {
    this.elem = createHtml(
      `<form>
        <input 
          class="${this.className}" 
          type="${this.type}" 
          id="${this.id}" 
          placeholder="${this.placeholder}"
        >
        </input>
      </form>`
    );
    this.elemInput = this.elem.children[0];
  }
  mount(container) {
    container.appendChild(this.elem);
  }
  unmount() {
    this.elem.remove();
  }
}

export default Input;
