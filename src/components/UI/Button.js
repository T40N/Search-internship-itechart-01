import { createHtml } from "../../utility/createHtml.js";

class Button {
  constructor(type, className, id, value) {
    this.type = type;
    this.className = className;
    this.id = id;
    this.value = value;
  }
  render() {
    this.elem = createHtml(`
      <button 
        class="${this.className} 
        type="${this.type} 
        id="${this.id}"
      >
        ${this.value}
      </button>
    `);
  }
  mount(container) {
    container.appendChild(this.elem);
  }
  unmount() {
    this.elem.remove();
  }
}

export default Button;
