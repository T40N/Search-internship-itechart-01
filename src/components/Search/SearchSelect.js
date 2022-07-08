import Select from "../UI/Select.js";
import Option from "../UI/Option.js";

class SearchSelect extends Select {
  constructor(name, id, className) {
    super(name, id, className);
    this.optionsValue = ["name", "occupation", "nationality"];
  }
  renderOptions() {
    this.options = this.optionsValue.map((optionValue) => {
      const optionElem = new Option(optionValue, optionValue);
      optionElem.render();
      return optionElem;
    });
  }
  mountOptions() {
    this.options.forEach((option) => {
      option.mount(this.elem);
    });
  }
}

export default SearchSelect;
