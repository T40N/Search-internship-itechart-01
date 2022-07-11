import {
  filterArrayByName,
  filterArrayByNationallity,
  filterArrayByOccupation,
  newEventListener,
  onDebounce,
  onImmidiate,
  onSubmit,
  onThrottle,
} from "../utility/eventListenerActions.js";
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

    this.addDebouncedButtonEventListener();
    this.addImmediateButtonEventListener();
    this.addOnSubmitButtonEventListener();
    this.addThrottledButtonEventListener();

    this.changeInputEventListener(this.searchCard.input);
    this.addSelectEventListener();
  }
  addImmediateButtonEventListener() {
    newEventListener(this.modeButtonsCard.getImmediateButton(), "click", () =>
      this.changeSearchOption("immediate")
    );
  }
  addOnSubmitButtonEventListener() {
    newEventListener(this.modeButtonsCard.getOnSubmitButton(), "click", () =>
      this.changeSearchOption("onSubmit")
    );
  }
  addDebouncedButtonEventListener() {
    newEventListener(this.modeButtonsCard.getDebouncedButton(), "click", () =>
      this.changeSearchOption("debounce")
    );
  }
  addThrottledButtonEventListener() {
    newEventListener(this.modeButtonsCard.getThrottledButton(), "click", () =>
      this.changeSearchOption("throttle")
    );
  }

  addSelectEventListener() {
    newEventListener(this.searchCard.searchSelect.elem, "change", (event) =>
      this.changeSearchCategory(event.target[event.target.selectedIndex].value)
    );
  }

  changeSearchCategory(category) {
    this.category = category;
    if (category === "name") {
      this.listOfData = filterArrayByName(this.inputValue, data);
      this.changeDisplayedData();
    }
    if (category === "nationality") {
      this.listOfData = filterArrayByNationallity(this.inputValue, data);
      this.changeDisplayedData();
    }
    if (category === "occupation") {
      this.listOfData = filterArrayByOccupation(this.inputValue, data);
      this.changeDisplayedData();
    }
    this.searchCard.unmountElems();
    this.searchCard.mountElems();
    this.changeInputEventListener(this.searchCard.input);
  }

  changeSearchOption(searchOption) {
    this.searchCard.unmountElems();
    this.searchCard.renderElems();
    this.searchCard.mountElems();
    this.searchOption = searchOption;
    this.inputValue = "";
    this.changeInputEventListener(this.searchCard.input);
    this.addSelectEventListener();
  }
  changeDisplayedData() {
    this.listCard.unmount();
    this.listCard = new ListCard("listCard", "listCard", this.listOfData);
    this.listCard.render();
    this.listCard.mount(this.appContainer);
    this.listCard.renderList();
    this.listCard.mountList();
  }
  changeInputEventListener(input) {
    if (this.searchOption === "immediate") {
      if (this.category === "name") {
        newEventListener(input.elem, "submit", (event) => {
          event.preventDefault();
        });
        newEventListener(input.elemInput, "input", (event) => {
          this.listOfData = onImmidiate(
            filterArrayByName(event.target.value, data)
          );
          this.inputValue = event.target.value;
          this.changeDisplayedData();
        });
      }
      if (this.category === "nationality") {
        newEventListener(input.elem, "submit", (event) => {
          event.preventDefault();
        });
        newEventListener(input.elemInput, "input", (event) => {
          this.listOfData = onImmidiate(
            filterArrayByNationallity(event.target.value, data)
          );
          this.inputValue = event.target.value;
          this.changeDisplayedData();
        });
      }
      if (this.category === "occupation") {
        newEventListener(input.elem, "submit", (event) => {
          event.preventDefault();
        });
        newEventListener(input.elemInput, "input", (event) => {
          this.listOfData = onImmidiate(
            filterArrayByOccupation(event.target.value, data)
          );
          this.inputValue = event.target.value;
          this.changeDisplayedData();
        });
      }
    }
    if (this.searchOption === "onSubmit") {
      if (this.category === "name") {
        newEventListener(input.elemInput, "input", (event) => {
          this.inputValue = event.target.value;
        });
        newEventListener(input.elem, "submit", (event) => {
          this.listOfData = onSubmit(
            event,
            filterArrayByName(this.inputValue, data)
          );
          this.changeDisplayedData();
        });
      }
      if (this.category === "nationality") {
        newEventListener(input.elemInput, "input", (event) => {
          this.inputValue = event.target.value;
        });
        newEventListener(input.elem, "submit", (event) => {
          this.listOfData = onSubmit(
            event,
            filterArrayByNationallity(this.inputValue, data)
          );
          this.inputValue = event.target.value;
          this.changeDisplayedData();
        });
      }
      if (this.category === "occupation") {
        newEventListener(input.elemInput, "input", (event) => {
          this.inputValue = event.target.value;
        });
        newEventListener(input.elem, "submit", (event) => {
          this.listOfData = onSubmit(
            event,
            filterArrayByOccupation(this.inputValue, data)
          );
          this.changeDisplayedData();
        });
      }
    }
    if (this.searchOption === "debounce") {
      if (this.category === "name") {
        newEventListener(input.elem, "submit", (event) => {
          event.preventDefault();
        });
        newEventListener(input.elemInput, "input", (event) => {
          onDebounce(() => {
            this.listOfData = filterArrayByName(event.target.value, data);
            this.inputValue = event.target.value;
            this.changeDisplayedData();
          }, 500);
          this.inputValue = event.target.value;
          this.changeDisplayedData();
        });
      }
      if (this.category === "nationality") {
        newEventListener(input.elem, "submit", (event) => {
          event.preventDefault();
        });
        newEventListener(input.elemInput, "input", (event) => {
          onDebounce(() => {
            this.listOfData = filterArrayByNationallity(
              event.target.value,
              data
            );
            this.inputValue = event.target.value;
            this.changeDisplayedData();
          }, 500);
        });
      }
      if (this.category === "occupation") {
        newEventListener(input.elem, "submit", (event) => {
          event.preventDefault();
        });
        newEventListener(input.elemInput, "input", (event) => {
          onDebounce(() => {
            this.listOfData = filterArrayByOccupation(event.target.value, data);
            this.inputValue = event.target.value;
            this.changeDisplayedData();
          }, 500);
        });
      }
    }
    if (this.searchOption === "throttle") {
      if (this.category === "name") {
        newEventListener(input.elem, "submit", (event) => {
          event.preventDefault();
        });
        newEventListener(input.elemInput, "input", (event) => {
          onThrottle(() => {
            this.listOfData = filterArrayByName(event.target.value, data);
            this.inputValue = event.target.value;
            this.changeDisplayedData();
          }, 500);
        });
      }
      if (this.category === "nationality") {
        newEventListener(input.elem, "submit", (event) => {
          event.preventDefault();
        });
        newEventListener(input.elemInput, "input", (event) => {
          onThrottle(() => {
            this.listOfData = filterArrayByNationallity(
              event.target.value,
              data
            );
            this.inputValue = event.target.value;
            this.changeDisplayedData();
          }, 500);
          this.inputValue = event.target.value;
          this.changeDisplayedData();
        });
      }
      if (this.category === "occupation") {
        newEventListener(input.elem, "submit", (event) => {
          event.preventDefault();
        });
        newEventListener(input.elemInput, "input", (event) => {
          onThrottle(() => {
            this.listOfData = filterArrayByOccupation(event.target.value, data);
            this.inputValue = event.target.value;
            this.changeDisplayedData();
          }, 500);
        });
      }
    }
  }
}

export default App;
