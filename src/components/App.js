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
import Div from "./Div/Div.js";
import Button from "./Button/Button.js";
import Form from "./Form/Form.js";
import Input from "./Input/Input.js";
import Select from "./Select/Select.js";

class App {
  constructor() {
    this.listOfData = data;
    this.searchOption = "immediate";
    this.category = "name";
    this.inputValue = "";
    this.appContainer = document.getElementById("container");
  }
  live() {
    this.modeButtonsCard = new Div(
      this.appContainer,
      "buttonsCard",
      "buttonsCard"
    );
    this.immediateButton = new Button(
      this.modeButtonsCard.element,
      "buttonsCard__button buttonsCard__button--immediate",
      "immediateButton",
      "Immediate"
    );
    this.onSubmitButton = new Button(
      this.modeButtonsCard.element,
      "buttonsCard__button buttonsCard__button--onSubmit",
      "onSubmitButton",
      "onSubmit"
    );
    this.onDebounceButton = new Button(
      this.modeButtonsCard.element,
      "buttonsCard__button buttonsCard__button--onDebounce",
      "onDebounceButton",
      "onDebounce"
    );
    this.onThrottleButton = new Button(
      this.modeButtonsCard.element,
      "buttonsCard__button buttonsCard__button--onThrottle",
      "onThrottleButton",
      "onThrottle"
    );
    this.searchCard = new Div(this.appContainer, "searchCard", "searchCard");
    this.searchForm = new Form(
      this.searchCard.element,
      "searchCard__form",
      "searchForm"
    );
    this.searchInput = new Input(
      this.searchForm.element,
      "searchCard__input",
      "searchInput",
      "text"
    );
    this.searchSelect = new Select(
      this.searchCard.element,
      "searchCard__select",
      "searchSelect",
      "searchSelect"
    );
    this.nameOption = new Option(
      this.searchSelect.element,
      "select__option select__option--name",
      "nameOption",
      "Name",
      "name"
    );
    this.nationalityOption = new Option(
      this.searchSelect.element,
      "select__option select__option--nationality",
      "nationalityOption",
      "Nationality",
      "nationality"
    );
    this.occupationOption = new Option(
      this.searchSelect.element,
      "select__option select__option--occupation",
      "occupationOption",
      "Occupation",
      "occupation"
    );
    this.listCard = new Div(this.appContainer, "listCard", "listCard");

    this.addButtonSearchEventListener(
      this.onDebounceButton.element,
      "click",
      "debounce"
    );
    this.addButtonSearchEventListener(
      this.immediateButton.element,
      "click",
      "immediate"
    );
    this.addButtonSearchEventListener(
      this.onSubmitButton.element,
      "click",
      "onSubmit"
    );
    this.addButtonSearchEventListener(
      this.onThrottleButton.element,
      "click",
      "throttle"
    );

    this.changeInputEventListener(
      this.searchForm.element,
      this.searchInput.element
    );
    this.addSelectEventListener(this.searchSelect.element);
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
