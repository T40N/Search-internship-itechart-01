import { createHtml } from "../../utility/createHtml";

class Option {
  constructor(value, text) {
    this.value = value;
    this.text = text;
    this.elem = "";
  }
  render() {
    this.elem = createHtml(
      `
        <option value="${this.value}">
          ${this.text}
        </option>
      `
    );
  }
  mount(container) {
    container.appendChild(this.elem);
  }
}

export default Option;
