import Card from "../UI/Card.js";
import Input from "../UI/Input.js";
import SearchSelect from "./SearchSelect.js";

class SearchCard extends Card {
  constructor(className, id, changeSearchOption) {
    super(className, id);
    this.changeSearchOption = changeSearchOption;
  }
  renderElems() {
    this.input = new Input(
      "text",
      "searchCard__input",
      "searchInput",
      "search"
    );
    this.searchSelect = new SearchSelect(
      "searchSelect",
      "searchSelect",
      "searchCard__select"
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
  unmountElems() {
    this.input.unmount();
    this.searchSelect.unmount();
  }
  addInputEventListener() {}
  addSelectEventListener() {}
}

export default SearchCard;