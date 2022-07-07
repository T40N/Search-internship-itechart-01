import { createHtml } from "../../utility/createHtml";

class Button {
  constructor(type, className, id, value, availability, container, event) {
    this.event = event;
    this.type = type;
    this.className = className;
    this.id = id;
    this.value = value;
    this.availability = availability;
    this.container = container;
  }
  render() {
    this.elem = createHtml(`
      <button class="${this.className} type="${this.type} id="${this.id}" disabled="${this.availability}">
        ${this.value}
      </button>
    `);
    this.container.appendChild(this.elem);
  }
  NewEventListener() {}
  SetEventListener() {}
}

export default Button;
