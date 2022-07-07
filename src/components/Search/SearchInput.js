import ListDisplay from "../List/ListDisplay.js";
import Input from "../UI/Input.js";

class SearchInput extends Input {
  constructor(className, id, event) {
    super("text", className, id, "Search value", event);
  }
  // changeOption(newSearchOption) {
  //   this.searchOption = newSearchOption;
  //   this.searchInputDiv.removeChild(this.searchForm);
  //   this.render();
  // }
}

export default SearchInput;
