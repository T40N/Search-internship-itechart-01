import {
  filterArrayByName,
  newEventListener,
  onImmidiate,
} from "../utility/eventListenerActions.js";
import ListCard from "./List/ListCard.js";
import ModeButtonsCard from "./ModeButtons/ModeButtonsCard.js";
import SearchCard from "./Search/SearchCard.js";
import data from "/src/store/dummy.json" assert { type: "json" };

class App {
  constructor() {
    this.listOfData = data;
    this.searchOption = "immidiate";
    this.searchCategory = "name";
    this.appContainer = document.getElementById("container");
    console.log(this.listOfData);
  }
  live() {
    this.modeButtonsCard = new ModeButtonsCard(
      "buttonsCard",
      "buttonsCard",
      this.changeSearchOption
    );
    this.modeButtonsCard.render();
    this.modeButtonsCard.mount(this.appContainer);
    this.modeButtonsCard.renderButtons();
    this.modeButtonsCard.mountButtons();
    this.searchCard = new SearchCard(
      "searchCard",
      "searchCard",
      this.searchOption,
      this.listOfData,
      this.changeListOfData
    );
    this.searchCard.render();
    this.searchCard.mount(this.appContainer);
    this.searchCard.renderElems();
    this.searchCard.mountElems();
    this.listCard = new ListCard("listCard", "listCard", this.listOfData);
    this.listCard.render();
    this.listCard.mount(this.appContainer);
    this.listCard.renderList();
    this.listCard.mountList();

    this.modeButtonsCard.addDebouncedButtonEventListener();
    this.modeButtonsCard.addImmediateButtonEventListener();
    this.modeButtonsCard.addOnSubmitButtonEventListener();
    this.modeButtonsCard.addThrottledButtonEventListener();
  }

  changeSearchOption(searchOption) {
    console.log(searchOption);
    this.searchOption = searchOption;
  }
  changeListOfData(newData) {
    this.listOfData = newData;
  }
  changeInputEventListener(input) {
    if (this.searchOption === "immediate") {
      if (this.category === "name") {
        newEventListener(input, "input", (event) =>
          onImmidiate(filterArrayByName(event.target.value, this.listOfData))
        );
      }
      if (this.category === "nationality") {
        newEventListener(input, "input", (event) =>
          onImmidiate(filterArrayByName(event.target.value, this.listOfData))
        );
      }
      if (this.category === "occupation") {
        newEventListener(input, "input", (event) =>
          onImmidiate(filterArrayByName(event.target.value, this.listOfData))
        );
      }
    }
    if (this.searchOption === "onSubmit") {
      if (this.category === "name") {
        newEventListener(input, "input", (event) =>
          onImmidiate(filterArrayByName(event.target.value, this.listOfData))
        );
      }
      if (this.category === "nationality") {
        newEventListener(input, "input", (event) =>
          onImmidiate(filterArrayByName(event.target.value, this.listOfData))
        );
      }
      if (this.category === "occupation") {
        newEventListener(input, "input", (event) =>
          onImmidiate(filterArrayByName(event.target.value, this.listOfData))
        );
      }
    }
    if (this.searchOption === "debounce") {
      if (this.category === "name") {
        newEventListener(input, "input", (event) =>
          onImmidiate(filterArrayByName(event.target.value, this.listOfData))
        );
      }
      if (this.category === "nationality") {
        newEventListener(input, "input", (event) =>
          onImmidiate(filterArrayByName(event.target.value, this.listOfData))
        );
      }
      if (this.category === "occupation") {
        newEventListener(input, "input", (event) =>
          onImmidiate(filterArrayByName(event.target.value, this.listOfData))
        );
      }
    }
    if (this.searchOption === "throttle") {
      if (this.category === "name") {
        newEventListener(input, "input", (event) =>
          onImmidiate(filterArrayByName(event.target.value, this.listOfData))
        );
      }
      if (this.category === "nationality") {
        newEventListener(input, "input", (event) =>
          onImmidiate(filterArrayByName(event.target.value, this.listOfData))
        );
      }
      if (this.category === "occupation") {
        newEventListener(input, "input", (event) =>
          onImmidiate(filterArrayByName(event.target.value, this.listOfData))
        );
      }
    }
  }
}

export default App;
