import {
  addPreventDefaultEvent,
  newEventListener,
  setOnDebounceEventListener,
  setOnImmediateEventListener,
  setOnSubmitEventListener,
  setOnThrottleEventListener,
} from "../utility/eventListenerActions.js";
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

    this.addButtonsEventListeners();
    this.addInputOnImmidiateEventListener();
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

    newEventListener(this.searchSelect.element, "change", (event) => {
      this.changeSearchCategory(event.target.value);
    });
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
  changeSearchCategory(category) {
    this.category = category;
    this.filterAndDisplay();
  }
  updateSearchInputs() {
    this.searchForm.unmount();
    this.searchSelect.unmount();
    this.createSearchForm(this.searchCard);
    this.createSearchSelect(this.searchCard);
  }
  addButtonsEventListeners() {
    newEventListener(
      this.immediateButton.element,
      "click",
      this.addInputOnImmidiateEventListener.bind(this)
    );
    newEventListener(
      this.onSubmitButton.element,
      "click",
      this.addInputOnSubmitEventListener.bind(this)
    );
    newEventListener(
      this.onDebounceButton.element,
      "click",
      this.addInputOnDebounceEventListener.bind(this)
    );
    newEventListener(
      this.onThrottleButton.element,
      "click",
      this.addInputOnThrottleEventListener.bind(this)
    );
  }
  addInputOnImmidiateEventListener() {
    this.inputValue = "";
    this.updateSearchInputs();
    addPreventDefaultEvent(this.searchForm.element);
    setOnImmediateEventListener(
      this.searchInput.element,
      this.searchEvent.bind(this)
    );
  }
  addInputOnSubmitEventListener() {
    this.inputValue = "";
    this.updateSearchInputs();
    setOnSubmitEventListener(
      this.searchForm.element,
      this.searchInput.element,
      this.changeInputValue.bind(this),
      (event) => {
        event.preventDefault();
        this.filterAndDisplay();
      }
    );
  }
  addInputOnDebounceEventListener() {
    this.inputValue = "";
    this.updateSearchInputs();
    addPreventDefaultEvent(this.searchForm.element);
    setOnDebounceEventListener(
      this.searchInput.element,
      this.searchEvent.bind(this)
    );
  }
  addInputOnThrottleEventListener() {
    this.inputValue = "";
    this.updateSearchInputs();
    addPreventDefaultEvent(this.searchForm.element);
    setOnThrottleEventListener(
      this.searchInput.element,
      this.searchEvent.bind(this)
    );
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
    this.changeInputValue(event);
    this.filterAndDisplay();
  }
  changeInputValue(event) {
    this.inputValue = event.target.value;
  }
}

export default App;
