import Component from "../BaseComponent/Component.js";

class Image extends Component {
  constructor(container, className, id, src, alt) {
    super(container, "img", className, id);
    this.setSrc(src);
    this.setAlt(alt);
  }
  setSrc(src) {
    this.element.setAttribute("src", src);
    this.src = src;
  }
  setAlt(alt) {
    this.element.setAttribute("alt", alt);
    this.alt = alt;
  }
}

export default Image;
