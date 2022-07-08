import ListElem from "./ListElem.js";
import Card from "../UI/Card.js";

class ListCard extends Card {
  constructor(className, id, listOfData) {
    super(className, id);
    this.listOfData = listOfData;
    console.log(listOfData);
  }
  renderList() {
    console.log(this.listOfData);
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
        "listElem"
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

  unmount() {
    this.listOfElements.forEach((element) => {
      element.unmount();
    });
  }
  changeDataList() {}
}

export default ListCard;
