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
    this.render();
  }

  render() {
    this.elem = createHtml(
      `<div class="${this.className}" id="${this.id}">
        <h2>${this.name} ${this.surname}</h2>
        <h5>${this.mostKnownWork}</h5>
        <p>${this.born} - ${this.deceased}</p>
        <div>${this.occupation.map((elem) => {
          return `<p>${elem}</p>`;
        })}</div>
      </>`
    );
    // this.listOfDataDiv = document.getElementById("dataDiv");
    // console.log(this.listOfDataDiv);
    // this.listElem = document.createElement("div");
    // this.listElem.classList.add("list-elem");
    // this.listElem.setAttribute("id", this.id);
    // this.listOfDataDiv.appendChild(this.listElem);
    // this.listElemImg = document.createElement("img");
    // this.listElemImg.setAttribute("src", this.img);
    // this.listElem.appendChild(this.listElemImg);
    // this.listElemName = document.createElement("h3");
    // this.listElemName.innerText = this.name;
    // this.listElem.appendChild(this.listElemName);
    // this.listElemContent = document.createElement("p");
    // this.listElemContent.innerText = this.content;
    // this.listElem.appendChild(this.listElemContent);
  }
}

export default ListElem;
