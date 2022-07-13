import {
  addPreventDefaultEvent,
  newEventListener,
} from "../utility/eventListenerActions.js";
import { onThrottle } from "../utility/onThrottle.js";
import { onDebounce } from "../utility/onDebounce.js";
import { filterArray } from "../utility/filterArray.js";
import ListCard from "./List/ListCard.js";
import ModeButtonsCard from "./ModeButtons/ModeButtonsCard.js";
import SearchCard from "./Search/SearchCard.js";
import data from "/src/store/dummy.json" assert { type: "json" };

class App {
  constructor() {
    this.listOfData = data;
    this.searchOption = "immediate";
    this.category = "name";
    this.inputValue = "";
    this.appContainer = document.getElementById("container");
    console.log(this.listOfData);
  }
  live() {
    this.modeButtonsCard = new ModeButtonsCard("buttonsCard", "buttonsCard");
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

    this.addButtonSearchEventListener(
      this.modeButtonsCard.getDebouncedButton(),
      "click",
      "debounce"
    );
    this.addButtonSearchEventListener(
      this.modeButtonsCard.getImmediateButton(),
      "click",
      "immediate"
    );
    this.addButtonSearchEventListener(
      this.modeButtonsCard.getOnSubmitButton(),
      "click",
      "onSubmit"
    );
    this.addButtonSearchEventListener(
      this.modeButtonsCard.getThrottledButton(),
      "click",
      "throttle"
    );

    this.changeInputEventListener(this.searchCard.input);
    this.addSelectEventListener(this.searchCard.searchSelect.elem);
  }

  addButtonSearchEventListener(button, event, option) {
    newEventListener(button, event, () => this.changeSearchOption(option));
  }

  addSelectEventListener(select) {
    console.log(select);
    newEventListener(select, "change", (event) =>
      this.changeSearchCategory(event.target[event.target.selectedIndex].value)
    );
  }

  changeSearchCategory(category) {
    this.category = category;
    this.listOfData = filterArray(category, this.inputValue, data);
    this.searchCard.unmountElems();
    this.searchCard.mountElems();
    this.changeInputEventListener(this.searchCard.input);
    this.changeDisplayedData();
  }
  changeSearchOption(searchOption) {
    this.searchCard.unmountElems();
    this.searchCard.renderElems();
    this.searchCard.mountElems();
    this.searchOption = searchOption;
    this.inputValue = "";
    this.changeInputEventListener(this.searchCard.input);
    this.addSelectEventListener(this.searchCard.searchSelect.elem);
  }
  changeDisplayedData() {
    this.listCard.unmount();
    this.listCard = new ListCard("listCard", "listCard", this.listOfData);
    this.listCard.render();
    this.listCard.mount(this.appContainer);
    this.listCard.renderList();
    this.listCard.mountList();
  }
  filterAndDisplay() {
    this.listOfData = filterArray(this.category, this.inputValue, data);
    this.changeDisplayedData();
  }
  changeInputEventListener(input) {
    addPreventDefaultEvent(input.elem);
    switch (this.searchOption) {
      case "immediate":
        newEventListener(input.elemInput, "input", (event) => {
          this.inputValue = event.target.value;
          this.filterAndDisplay();
        });
        break;
      case "onSubmit":
        newEventListener(input.elemInput, "input", (event) => {
          this.inputValue = event.target.value;
        });
        newEventListener(input.elem, "submit", (event) => {
          event.preventDefault();
          this.filterAndDisplay();
        });
      case "debounce":
        addPreventDefaultEvent(input.elem);
        newEventListener(input.elemInput, "input", (event) => {
          this.inputValue = event.target.value;
          onDebounce(() => {
            this.filterAndDisplay();
          }, 2000);
        });
      case "throttle":
        addPreventDefaultEvent(input.elem);
        newEventListener(input.elemInput, "input", (event) => {
          this.inputValue = event.target.value;
          onThrottle(() => {
            this.filterAndDisplay();
          }, 2000);
        });
    }
  }
}

export default App;
