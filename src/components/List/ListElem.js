import { createHtml } from "../../utility/createHtml.js";

class ListElem {
  constructor(
    id,
    name,
    surname,
    occupation,
    nationality,
    mostKnownWork,
    born,
    deceased,
    img,
    className,
    imgClass,
    pClass,
    h2Class,
    h6Class
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.occupation = occupation;
    this.nationality = nationality;
    this.mostKnownWork = mostKnownWork;
    this.born = born;
    this.deceased = deceased;
    this.img = img;
    this.elem = "";
    this.className = className;
    this.imgClass = imgClass;
    this.pClass = pClass;
    this.h2Class = h2Class;
    this.h6Class = h6Class;
  }

  render() {
    this.elem = createHtml(
      `
        <div 
          class="${this.className}" 
          id="${this.id}"
        >
          <h1>${this.name} ${this.surname}</h1>
          <img src="${this.img}" alt="${this.name} ${this.surname}"
           class="${this.imgClass}"></img>
          <h6 class="${this.h6Class}">Most known work</h6>
          <h2 class="${this.h2Class}">${this.mostKnownWork}</h2>
          <p class="${this.pClass}">
            ${this.occupation.join(", ")}
          </p>
          <p class="${this.pClass}">${this.born} to ${this.deceased}</p>
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

export default ListElem;
