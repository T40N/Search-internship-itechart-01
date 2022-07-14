import {
  addPreventDefaultEvent,
  newEventListener,
  setOnImmediateEventListener,
} from "../utility/eventListenerActions.js";
import { onThrottle } from "../utility/onThrottle.js";
import { onDebounce } from "../utility/onDebounce.js";
import { filterArray } from "../utility/filterArray.js";
import data from "/src/store/dummy.json" assert { type: "json" };
import Button from "./Button/Button.js";
import Form from "./Form/Form.js";
import Input from "./Input/Input.js";
import Select from "./Select/Select.js";
import Option from "./Option/Option.js";
import listElem from "./listElem/listElem.js";

class App {
  constructor() {
    this.listOfData = data;
    this.searchOption = "immediate";
    this.category = "name";
    this.inputValue = "";
    this.appContainer = document.getElementById("container");
  }
  live() {
    this.createContainers(this.appContainer);
    this.createButtons(this.modeButtonsCard);
    this.createSearchForm(this.searchCard);
    this.createSearchSelect(this.searchCard);
    this.displayData();

    newEventListener(this.immediateButton.element, "click", (event) => {
      addPreventDefaultEvent(this.searchForm.element);
      setOnImmediateEventListener(this.searchInput.element, this.searchEvent);
    });

    // this.addButtonSearchEventListener(
    //   this.onDebounceButton.element,
    //   "click",
    //   "debounce"
    // );
    // this.addButtonSearchEventListener(
    //   this.immediateButton.element,
    //   "click",
    //   "immediate"
    // );
    // this.addButtonSearchEventListener(
    //   this.onSubmitButton.element,
    //   "click",
    //   "onSubmit"
    // );
    // this.addButtonSearchEventListener(
    //   this.onThrottleButton.element,
    //   "click",
    //   "throttle"
    // );

    this.changeInputEventListener(
      this.searchForm.element,
      this.searchInput.element
    );
    this.addSelectEventListener(this.searchSelect.element);
  }
  createContainers(appContainer) {
    this.createModeButtonCard(appContainer);
    this.createSearchCard(appContainer);
    this.createListCard(appContainer);
  }
  createModeButtonCard(appContainer) {
    this.modeButtonsCard = document.createElement("div");
    this.modeButtonsCard.classList.add("buttonsCard");
    this.modeButtonsCard.setAttribute("id", "buttonsCard");
    appContainer.appendChild(this.modeButtonsCard);
  }
  createSearchCard(appContainer) {
    this.searchCard = document.createElement("div");
    this.searchCard.classList.add("searchCard");
    this.searchCard.setAttribute("id", "searchCard");
    appContainer.appendChild(this.searchCard);
  }
  createListCard(appContainer) {
    this.listCard = document.createElement("div");
    this.listCard.classList.add("listCard");
    this.listCard.setAttribute("id", "listCard");
    appContainer.appendChild(this.listCard);
  }
  createSearchForm(container) {
    this.searchForm = new Form(container, "searchCard__form", "searchForm");
    this.searchInput = new Input(
      this.searchForm.element,
      "searchCard__input",
      "searchInput",
      "text",
      "search"
    );
  }
  createSearchSelect(container) {
    this.searchSelect = new Select(
      container,
      "searchCard__select",
      "searchSelect",
      "searchSelect"
    );
    this.nameOption = new Option(
      this.searchSelect.element,
      "select__option",
      "nameOption",
      "Name",
      "name"
    );
    this.nationalityOption = new Option(
      this.searchSelect.element,
      "select__option",
      "nationalityOption",
      "Nationality",
      "nationality"
    );
    this.occupationOption = new Option(
      this.searchSelect.element,
      "select__option",
      "occupationOption",
      "Occupation",
      "occupation"
    );
  }
  createButtons(container) {
    this.immediateButton = new Button(
      container,
      "buttonsCard__button",
      "immediateButton",
      "Immediate"
    );
    this.onSubmitButton = new Button(
      container,
      "buttonsCard__button",
      "onSubmitButton",
      "onSubmit"
    );
    this.onDebounceButton = new Button(
      container,
      "buttonsCard__button",
      "onDebounceButton",
      "onDebounce"
    );
    this.onThrottleButton = new Button(
      container,
      "buttonsCard__button",
      "onThrottleButton",
      "onThrottle"
    );
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
    this.searchForm.unmount();
    this.searchSelect.unmount();
    this.createSearchForm(this.searchCard);
    this.createSearchSelect(this.searchCard);
    this.changeInputEventListener(
      this.searchForm.element,
      this.searchInput.element
    );
    this.changeDisplayedData();
  }
  changeSearchOption(searchOption) {
    this.searchForm.unmount();
    this.searchSelect.unmount();
    this.createSearchForm(this.searchCard);
    this.createSearchSelect(this.searchCard);
    this.searchOption = searchOption;
    this.inputValue = "";
    this.changeInputEventListener(
      this.searchForm.element,
      this.searchInput.element
    );
    this.addSelectEventListener(this.searchSelect.element);
  }
  changeDisplayedData() {
    this.listCard.remove();
    this.createListCard(this.appContainer);
    this.displayData();
  }
  displayData() {
    this.listOfData.forEach((element) => {
      new listElem(
        this.listCard,
        "listCard__listElem",
        "listElem",
        `${element.name} ${element.surname}`,
        element.mostKnownWork,
        element.nationality,
        element.img,
        `${element.name} ${element.surname}`,
        element.occupation.join(", ").trim(),
        `${element.lived.born}, to ${element.lived.deceased}`
      );
    });
  }
  filterAndDisplay() {
    this.listOfData = filterArray(this.category, this.inputValue, data);
    this.changeDisplayedData();
  }
  searchEvent(event) {
    this.inputValue = event.target.value;
    this.filterAndDisplay();
  }
  changeInputValue(event) {
    this.inputValue = event.target.value;
  }
}
//call different functions each time the button is clicked it can help
export default App;
