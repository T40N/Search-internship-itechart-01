import Component from "../BaseComponent/Component.js";

class Text extends Component {
  constructor(container, elementType, className, id, content) {
    super(container, elementType, className, id);
    this.setContent(content);
  }
  setContent(content) {
    this.element.innerHTML = "";
    this.element.innerHTML = content;
    this.content = content;
  }
}

export default Text;
