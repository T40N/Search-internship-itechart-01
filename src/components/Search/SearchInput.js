import LIST_OF_DATA from "../../context/dataList.js";
import ListDisplay from "../List/ListDisplay.js";

class SearchInput {
  constructor(searchOption) {
    this.searchOption = searchOption;
    this.listOfData = LIST_OF_DATA;

    this.searchInputDiv = document.getElementById("inputDiv");
    this.debounceTimer = 0;
    this.throttlePouse = false;
    this.ListDisplay = new ListDisplay(this.listOfData);
    this.render();
  }

  render() {
    this.searchInput = document.createElement("INPUT");
    this.searchInput.setAttribute("type", "text");
    this.searchInput.classList.add("search-input");
    this.searchInput.setAttribute("id", "searchInput");
    this.searchForm = document.createElement("form");
    this.searchForm.appendChild(this.searchInput);
    this.newEventListener();
    this.searchInputDiv.appendChild(this.searchForm);
  }

  newEventListener() {
    if (this.searchOption === "onSubmit") {
      this.searchInput.addEventListener("input", (event) => {
        this.inputValue = event.target.value;
      });
      this.searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        this.onSubmit(event);
      });
    }
    if (this.searchOption === "onDebounce") {
      this.searchInput.addEventListener("input", (event) =>
        this.onDebounce(() => this.updateDebounceValue(event), 500)
      );
    }
    if (this.searchOption === "onThrottle") {
      this.searchInput.addEventListener("input", (event) =>
        this.onThrottle(() => {
          this.filterArray(event.target.value);
        }, 500)
      );
    }
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.inputValue);
    this.filterArray(this.inputValue);
  }

  updateDebounceValue(event) {
    this.filterArray(event.target.value);
  }

  onDebounce(callback, time) {
    window.clearTimeout(this.debounceTimer);
    this.debounceTimer = window.setTimeout(callback, time);
  }

  onThrottle(callback, time) {
    console.log(this.throttlePouse);
    if (this.throttlePouse) return;

    this.throttlePouse = true;

    setTimeout(() => {
      callback();
      this.throttlePouse = false;
    }, time);
  }

  changeOption(newSearchOption) {
    this.searchOption = newSearchOption;
    this.searchInputDiv.removeChild(this.searchForm);
    this.render();
  }

  filterArray(value) {
    console.log(value);
    if (value.trim() === "") {
      this.listOfData = LIST_OF_DATA;
    }
    this.listOfData = this.listOfData.filter((elem) => {
      if (value.trim().toLowerCase() == elem.id) {
        return true;
      }
      if (elem.name.toLowerCase().search(value.trim().toLowerCase()) >= 0) {
        return true;
      }
      if (elem.content.toLowerCase().search(value.trim().toLowerCase()) >= 0) {
        return true;
      }
    });
    console.log(this.listOfData);
    this.ListDisplay.changeListOfData(this.listOfData);
  }
}

export default SearchInput;
