import Component from "../BaseComponent/Component.js";
import Image from "../Image/Image.js";
import Text from "../Text/Text.js";
class listElem extends Component {
  constructor(
    container,
    className,
    id,
    titleContent,
    mostKnownWorkContent,
    nationalityContent,
    imgSrc,
    imgAlt,
    occupationContent,
    bornAndDiedContent
  ) {
    super(container, "div", className, id);
    this.titleContent = titleContent;
    this.mostKnownWorkContent = mostKnownWorkContent;
    this.nationalityContent = nationalityContent;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
    this.occupationContent = occupationContent;
    this.bornAndDiedContent = bornAndDiedContent;
    this.renderElems();
  }
  renderElems() {
    this.title = new Text(
      this.element,
      "h2",
      "listElem__h2",
      "listElemTitle",
      this.titleContent
    );
    this.image = new Image(
      this.element,
      "listElem__img",
      "listElemImage",
      this.imgSrc,
      this.imgAlt
    );
    this.mostKnownWorkLabel = new Text(
      this.element,
      "h6",
      "listElem__h6",
      "listElemMostKnownWorkLabel",
      "Most known work"
    );
    this.mostKnownWork = new Text(
      this.element,
      "h2",
      "listElem__h2",
      "listElemMostKnownWork",
      this.mostKnownWorkContent
    );
    this.nationality = new Text(
      this.element,
      "p",
      "listElem__p",
      "listElemNationality",
      this.nationalityContent
    );
    this.occupation = new Text(
      this.element,
      "p",
      "listElem__p",
      "listElemOccupation",
      this.occupationContent
    );
    this.bornAndDied = new Text(
      this.element,
      "p",
      "listElem__p",
      "listElemOccupation",
      this.bornAndDiedContent
    );
  }
}

export default listElem;
