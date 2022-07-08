import { createHtml } from "../../utility/createHtml.js";

class Select {
  constructor(name, id, className) {
    this.name = name;
    this.id = id;
    this.className = className;
    this.elem = "";
  }
  render() {
    this.elem = createHtml(
      `
        <select name=${this.name} id=${this.id} class=${this.className}>
        </select>
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

export default Select;
