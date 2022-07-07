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
    console.log(this.elem);
  }
  mount(container) {
    console.log(this.elem);
    container.appendChild(this.elem);
  }
}

export default Card;
