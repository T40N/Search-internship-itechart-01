import Card from "../UI/Card.js";
import Input from "../UI/Input.js";
import SearchSelect from "./SearchSelect.js";

class SearchCard extends Card {
  constructor(className, id) {
    super(className, id);
  }
  renderElems() {
    this.input = new Input("text", "searchInput", "searchInput", "search");
    this.searchSelect = new SearchSelect(
      "searchSelect",
      "searchSelect",
      "searchSelect"
    );

    this.input.render();
    this.searchSelect.render();

    this.searchSelect.renderOptions();
  }
  mountElems() {
    if (!this.elem) {
      console.log("Firstly mount SearchCard");
      return;
    }
    this.input.mount(this.elem);
    this.searchSelect.mount(this.elem);
    this.searchSelect.mountOptions();
  }
}

export default SearchCard;
