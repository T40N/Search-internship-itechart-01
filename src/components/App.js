import { readData } from "../utility/readData.js";
import ModeButtonsCard from "./ModeButtons/ModeButtonsCard.js";

class App {
  constructor() {
    this.listOfData = readData();
    this.searchOption = "immidiate";
    this.appContainer = document.getElementById("container");
  }
  live() {
    this.modeButtonsCard = new ModeButtonsCard("buttonsCard", "buttonsCard");
    this.modeButtonsCard.render();
    this.modeButtonsCard.mount(this.appContainer);
    this.modeButtonsCard.renderButtons();
    this.modeButtonsCard.mountButtons();
  }
}

export default App;
