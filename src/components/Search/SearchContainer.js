import SearchInput from "./SearchInput.js";

class SearchContainer {
  constructor(searchOption) {
    this.searchOption = searchOption;
    this.render();
    this.SearchInput = new SearchInput(this.searchOption);
  }

  render() {
    this.onSubmitSearchOptionButton = document.getElementById("onSubmitButton");
    this.onSubmitSearchOptionButton.addEventListener("click", () => {
      this.searchInputRender("onSubmit");
    });
    this.onDebounceSearchOptionButton =
      document.getElementById("onDebounceButton");
    this.onDebounceSearchOptionButton.addEventListener("click", () => {
      this.searchInputRender("onDebounce");
    });
    this.onThrottleSearchOptionButton =
      document.getElementById("onThrottleButton");
    this.onThrottleSearchOptionButton.addEventListener("click", () => {
      this.searchInputRender("onThrottle");
    });
  }
  searchInputRender(option) {
    this.SearchInput.changeOption(option);
  }
}

export default SearchContainer;
