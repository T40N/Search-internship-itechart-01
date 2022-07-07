import Input from "../UI/Input.js";

class SearchInput extends Input {
  constructor(className, id) {
    super("text", className, id, "Search value");
  }
}

export default SearchInput;
