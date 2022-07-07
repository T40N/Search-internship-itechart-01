import ListElem from "../UI/ListElem.js";

class ListDisplay {
  constructor(listOfData) {
    this.listOfData = listOfData;
    this.render();
  }
  render() {
    console.log(this.listOfData);
    this.listOfData.forEach((element) => {
      new ListElem(element.id, element.img, element.name, element.content);
    });
  }

  changeListOfData(listOfData) {
    let dataDiv = document.getElementById("dataDiv");
    while (dataDiv.firstChild) {
      dataDiv.removeChild(dataDiv.lastChild);
    }
    this.listOfData = listOfData;
    this.render();
  }
}

export default ListDisplay;
