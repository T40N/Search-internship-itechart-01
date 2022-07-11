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
    imgClass
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
  }

  render() {
    this.elem = createHtml(
      `
        <div 
          class="${this.className}" 
          id="${this.id}"
        >
          <img src="${this.img}" alt="${this.name} ${this.surname}" class="${
        this.imgClass
      }"></img>
          <h2>${this.name} ${this.surname}</h2>
          <h5>Most known work: ${this.mostKnownWork}</h5>
          <p>Lived from: ${this.born}, to: ${this.deceased}</p>
          <p>
            ${this.occupation.map((elem) => {
              return `${elem} `;
            })}
          </p>
        </>
      `
    );
  }
  mount(container) {
    container.appendChild(this.elem);
  }
  unmount() {
    console.log(elem);
    this.elem.remove();
  }
}

export default ListElem;
