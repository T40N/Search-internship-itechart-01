import Div from "../Div/Div.js";
import Form from "../Form/Form.js";
import Input from "../Input/Input.js";

class SearchCard extends Div {
  constructor(
    container,
    className,
    id,
    formClassName,
    formId,
    inputClassName,
    inputId,
    inputType,
    selectClassName,
    selectId,
    selectName
  ) {
    super(container, className, id);
    this.formClassName = formClassName;
    this.formId = formId;
    this.inputClassName = inputClassName;
    this.inputId = inputId;
    this.inputType = inputType;
    this.selectClassName = selectClassName;
    this.selectId = selectId;
    this.selectName = selectName;
    this.renderElems();
  }
  renderElems() {
    this.input = new Input(
      this.element,
      this.inputClassName,
      this.inputId,
      this.inputType
    );
  }
}

export default SearchCard;
