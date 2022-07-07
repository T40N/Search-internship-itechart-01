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
    className
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.occupation = occupation;
    this.nationality = nationality;
    this.mostKnownWork = mostKnownWork;
    this.born = born;
    this.deceased = deceased;
    this.elem = "";
    this.className = className;
  }

  render() {
    this.elem = createHtml(
      `
        <div 
          class="${this.className}" 
          id="${this.id}"
        >
          <h2>${this.name} ${this.surname}</h2>
          <h5>${this.mostKnownWork}</h5>
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
    console.log(container);
    container.appendChild(this.elem);
  }
}

export default ListElem;
