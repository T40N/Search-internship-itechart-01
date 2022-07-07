import { createHtml } from "../../utility/createHtml";

class Button {
  constructor(type, className, id, value, disability) {
    this.type = type;
    this.className = className;
    this.id = id;
    this.value = value;
    this.disability = disability;
  }
  render() {
    this.elem = createHtml(`
      <button class="${this.className} type="${this.type} id="${this.id}" disabled="${this.disability}">
        ${this.value}
      </button>
    `);
  }
  mount(container) {
    container.appendChild(this.elem);
  }
}

export default Button;
