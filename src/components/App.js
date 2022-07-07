import { readData } from "../utility/readData.js";
import ListCard from "./List/ListCard.js";
import ModeButtonsCard from "./ModeButtons/ModeButtonsCard.js";
import data from "/src/context/dummy.json" assert { type: "json" };

class App {
  constructor() {
    this.listOfData = data;
    this.searchOption = "immidiate";
    this.appContainer = document.getElementById("container");
    console.log(this.listOfData);
  }
  live() {
    this.modeButtonsCard = new ModeButtonsCard("buttonsCard", "buttonsCard");
    this.modeButtonsCard.render();
    this.modeButtonsCard.mount(this.appContainer);
    this.modeButtonsCard.renderButtons();
    this.modeButtonsCard.mountButtons();
    this.listCard = new ListCard("listCard", "listCard", this.listOfData);
    this.listCard.render();
    this.listCard.mount(this.appContainer);
    this.listCard.renderList();
    this.listCard.mountList();
  }
}

export default App;
