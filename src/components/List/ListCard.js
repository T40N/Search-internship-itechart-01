import ListElem from "./ListElem.js";
import Card from "../UI/Card.js";

class ListCard extends Card {
  constructor(className, id, listOfData) {
    super(className, id);
    this.listOfData = listOfData;
  }
  renderList() {
    this.listOfElements = [];
    this.listOfElements = this.listOfData.map((element) => {
      const listElem = new ListElem(
        element.id,
        element.name,
        element.surname,
        element.occupation,
        element.nationality,
        element.mostKnownWork,
        element.lived.born,
        element.lived.deceased,
        element.img,
        `listCard__listElem listCard__listElem--${element.id}`,
        `listElem__img listElem__img--${element.id}`,
        `listElem__p listElem__p--${element.id}`,
        `listElem__h3 listElem__h3--${element.id}`,
        `listElem__h6 listElem__h6--${element.id}`
      );
      listElem.render();
      return listElem;
    });
  }
  mountList() {
    if (!this.elem) {
      console.log("First mount ListCard!");
      return;
    }
    this.listOfElements.forEach((element) => {
      element.mount(this.elem);
    });
  }

  unmountList() {
    this.listOfElements.forEach((element) => {
      console.log(element.elem);
    });
  }
  changeDataList(newData) {
    this.listOfData = newData;
  }
}

export default ListCard;
