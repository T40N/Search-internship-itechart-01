import LIST_OF_DATA from "../context/dataList.js";
import SearchContainer from "./Search/SearchContainer.js";
import ListDisplay from "./List/ListDisplay.js";
import { readData } from "../utility/readData.js";

class App {
  constructor() {
    this.listOfData = readData();
    this.searchOption = "onThrottle";
  }
  live() {}
}

export default App;
