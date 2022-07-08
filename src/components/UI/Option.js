import { createHtml } from "../../utility/createHtml.js";

class Option {
  constructor(value, text, className) {
    this.value = value;
    this.text = text;
    this.className = className;
    this.elem = "";
  }
  render() {
    this.elem = createHtml(
      `
        <option value="${this.value} class="${this.className}">
          ${this.text}
        </option>
      `
    );
  }
  mount(container) {
    container.appendChild(this.elem);
  }
  unmount() {
    this.elem.remove();
  }
}

export default Option;
