import { createHtml } from "../../utility/createHtml.js";

class Card {
  constructor(className, id) {
    this.className = className;
    this.id = id;
    this.elem = "";
  }
  render() {
    this.elem = createHtml(
      `
        <div 
          class="${this.className}" 
          id="${this.id}"
        >
        </div>
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

export default Card;
