import LIST_OF_DATA from "../context/dataList.js";
import SearchContainer from "./Search/SearchContainer.js";
import ListDisplay from "./List/ListDisplay.js";

class App {
  constructor() {
    this.listOfData = LIST_OF_DATA;
    this.searchOption = "onThrottle";
    this.render();
  }

  render() {
    this.Search = new SearchContainer(this.searchOption);
  }

  live() {}
}

export default App;
